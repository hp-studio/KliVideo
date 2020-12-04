package dubboService;

import entity.system.FileInfo;
import entity.system.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author mawen
 * @date 2020/11/25 17:56
 * @email 455766076@qq.com
 * @description
 */
public interface VideoUploadService extends MasterService {

    void upload(MultipartFile file, FileInfo fileInfo, User user) throws IOException;
}
