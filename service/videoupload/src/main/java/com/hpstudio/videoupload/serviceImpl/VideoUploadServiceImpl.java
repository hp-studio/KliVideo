package com.hpstudio.videoupload.serviceImpl;

import dubboService.VideoUploadService;
import entity.system.FileInfo;
import entity.system.User;
import org.apache.dubbo.config.annotation.DubboService;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * @author mawen
 * @date 2020/11/25 15:08
 * @email 455766076@qq.com
 * @description
 */
@DubboService
public class VideoUploadServiceImpl implements VideoUploadService {
    private final static String PATH = "/home/upload";

    private final static String SUFFIX = ".tmp";

    private final static String PATHMARK = "/";
    @Override
    public String dodo() {
        return "upload success";
    }

    @Override
    public void upload(MultipartFile multipartFile, FileInfo fileInfo, User user) throws IOException {
        //存放文件的目录 /home/upload/xxx
        String directory = PATH + PATHMARK + fileInfo.getId();
        File fileDirectory = new File(directory);
        //文件夹不存在则创建文件夹
        if (!fileDirectory.exists()) {
            fileDirectory.mkdirs();
        }
        //文件名 xxx_1.tmp
        String fileName = fileInfo.getId() + "_" + fileInfo.getChunk() + SUFFIX;
        File f = new File(directory, fileName);
        //分片存在删除后再上传
        if (f.exists()) {
            f.delete();
        }
        //重新上传
        multipartFile.transferTo(f);

        //最后一个分片  合并文件
        if (fileInfo.getChunk().equals(fileInfo.getTotalChunk())) {
            File complete = new File(directory, fileInfo.getId() + "." + getExtensionName(fileInfo.getFileName()));
            FileOutputStream outputStream = new FileOutputStream(complete, true);
            byte[] bytes = new byte[10 * 1024 * 1024];
            int len;
            FileInputStream inputStream = null;
            for (int i = 1; i <= fileInfo.getTotalChunk(); i++) {
                inputStream = new FileInputStream(new File(directory, fileInfo.getId() + "_" + i + SUFFIX));
                while ((len = inputStream.read(bytes)) != -1) {
                    outputStream.write(bytes, 0, len);
                }
            }
            inputStream.close();
            outputStream.close();
        }
    }

    public static String getExtensionName(String filename) {
        if ((filename != null) && (filename.length() > 0)) {
            int dot = filename.lastIndexOf('.');
            if ((dot > -1) && (dot < (filename.length() - 1))) {
                return filename.substring(dot + 1);
            }
        }
        return filename.toLowerCase();
    }
}
