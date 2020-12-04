package entity.system;

import lombok.Data;

/**
 * @author mawen
 * @date 2020/12/3 17:02
 * @email 455766076@qq.com
 * @description
 */
@Data
public class FileInfo {
    /**
     * 文件名
     */
    private String fileName;

    /**
     * 文件唯一id
     */
    private String id;

    /**
     * 文件md5值
     */
    private String md5;

    /**
     * 文件大小
     */
    private Long fileSize;

    /**
     * 分片数量
     */
    private Integer totalChunk;

    /**
     * 当前分片
     */
    private Integer chunk;

    /**
     * 分片md5
     */
    private String chunkMD5;
}
