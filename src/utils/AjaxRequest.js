import fetchJsonp from 'fetch-jsonp';

export default class AjaxRequest {
    constructor(baseUrl, callback, options = {}){
        this.baseUrl = baseUrl;
        this.options = options;
        this.callback = callback;
        this.url = this.baseUrl;
        this.params = {};
    }
    buildUrl(){
        var paramString = '';
        if(this.baseUrl.indexOf('?') === -1){
            paramString = '?'
        }
        else if(this.baseUrl[this.baseUrl.length - 1] !== '&'){
            paramString = '&'
        }
        var keys = Object.keys(this.params);
        var values = Object.values(this.params);
        for(let i = 0; i < keys.length; i++){
            paramString += keys[i] + '=' + values[i] + '&';
        }
        this.url = this.baseUrl + paramString;
    }
    setParam(params){
        this.params = params;
        this.buildUrl();
        return this;
    }
    updateParam(newParams){
        this.params = Object.assign(this.params, newParams);
        this.buildUrl();
    }
    setCallBack(callback){
        this.callback = callback;
    }
    getUrl(){
        return this.url;
    }
    fetchP(callback = this.callback){
        fetchJsonp(this.url)
            .then(response => response.json())
            .then(data => {
                callback(data);
            })
    }
    fetch(callback = this.callback){
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.callback(data);
            })
    }
}