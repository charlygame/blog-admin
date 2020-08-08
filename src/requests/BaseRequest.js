
const axios = require('axios').default;

export default class BaseRequest {
    
    constructor() {
        this._http = axios;
        this._params = [];
        this._response = {};
    }
    /**
     * 添加必要参数
     */
    addNeededParams() {

    }
    /**
     * 添加参数
     * @param {*} key 
     * @param {*} value 
     */
    addParam(key, value) {
        this._params[key] = value;
    }
    /**
     * 通过key值获取参数
     * @param {*} key 
     */
    getParam(key) {
        return this._params[key];
    }
    /**
     * 转为form data
     * @param {*} data 
     */
    parseDataToFormData(data) {
        const result = new FormData;
        Object.keys(data).forEach((key) => {
            result.append(key, data[key]);
        });
        return result;
    }
    /**
     * get 请求
     * @param {*} options 
     */
    async get(options) {

        this._response = await this._http.get(
            options.url || this.getUrl(),
            {
                params: this._params
            }
        )
        this.parseData();
        return this._response;
    }
    /**
     * 携带token的get 请求
     * @param {*} options 
     */
    getWithToken(options) {
        return localStorage.getItem('ba_token') || '';
    }
    /**
     * post请求
     * @param {*} options 
     */
    async post(options) {
        this._response = await this._http.post(
            options.url || this.getUrl(),
            {
                params: this._params
            }
        )
        this.parseData();
        return this._response;
    }
    /**
     * 携带token的post请求
     * @param {*} options 
     */
    postWithToken(options) {

    }
    /**
     * 需要子类继承
     * 获取请求链接
     */
    getUrl() {

    }
    /**
     * 需要子类继承
     * 解析返回数据
     */
    parseData() {

    }
}