import BaseRequest from '../BaseRequest' 
import Api from '../Api'


export default class RequestLogin extends BaseRequest {
    
    constructor() {
        super()
    }
    /**
     * 准备登陆接口
     */
    getUrl() {
        return Api.LOGIN;
    }
    /**
     * 解析响应数据
     */
    parseData() {

    }
}