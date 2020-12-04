package entity.system;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;

/**
 * @author mawen
 * @date 2020/11/25 14:01
 * @email 455766076@qq.com
 * @description
 */
@Data
public class User implements Serializable {

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String nickName;

    private String phone;

    private String password;
}
