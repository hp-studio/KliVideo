package dubboService;

import entity.system.User;
import org.springframework.boot.autoconfigure.security.SecurityProperties;

/**
 * @author mawen
 * @date 2020/12/3 11:16
 * @email 455766076@qq.com
 * @description
 */
public interface UserService {
    User getById(Integer id);

    boolean register(User user);
}
