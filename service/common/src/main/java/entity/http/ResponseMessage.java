package entity.http;

import constant.ResponseConstant;
import lombok.Data;

/**
 * @author mawen
 * @date 2020/11/25 14:36
 * @email 455766076@qq.com
 * @description
 */
@Data
public class ResponseMessage {
    private int code;
    private Object data;
    private String message;

    private ResponseMessage() {

    }

    public ResponseMessage(int code, Object data, String message) {
        this.code = code;
        this.data = data;
        this.message = message;
    }

    public ResponseMessage(int code, Object data) {
        this.code = code;
        this.data = data;
    }

    public ResponseMessage(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public ResponseMessage(int code) {
        this.code = code;
    }

    /**
     * 只返回成功状态码
     *
     * @return
     */
    public static ResponseMessage success() {
        return new ResponseMessage(ResponseConstant.SUCCESS_CODE);

    }

    /**
     * 状态码 + 数据
     *
     * @param data
     * @return
     */
    public static ResponseMessage success(Object data) {
        return new ResponseMessage(ResponseConstant.SUCCESS_CODE, data);
    }

    /**
     * 状态码 + 数据 + 提醒信息
     *
     * @param data
     * @param message
     * @return
     */
    public static ResponseMessage success(Object data, String message) {
        return new ResponseMessage(ResponseConstant.SUCCESS_CODE, data, message);
    }

    /**
     * 错误码 + 数据
     *
     * @param data
     * @return
     */
    public static ResponseMessage error(int code, Object data) {
        return new ResponseMessage(code, data);
    }

    /**
     * 错误码 + 错误提示语
     *
     * @param message
     * @return
     */
    public static ResponseMessage error(int code, String message) {
        return new ResponseMessage(code, message);
    }

    /**
     * 错误码 + 数据 + 错误提示语
     *
     * @param data
     * @param message
     * @return
     */
    public static ResponseMessage error(int code, Object data, String message) {
        return new ResponseMessage(code, data, message);
    }
}
