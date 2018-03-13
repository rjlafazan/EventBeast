import fetchJsonp from 'fetch-jsonp';

export default class AjaxRequest {
    constructor(baseUrl, callback, options = {}){
        this.baseUrl = baseUrl;
        this.options = options;
        this.callback = callback;
        this.url = this.baseUrl;
        this.params = {};
    }
    setParam(params){
        this.params = params;
        var keys = Object.keys(this.params);
        var values = Object.values(this.params);
        var paramString = '?';
        for(let i = 0; i < keys.length; i++){
            paramString += keys[i] + '=' + values[i] + '&';
        }
        this.url = this.baseUrl + paramString;
        return this;
    }
    updateParam(newParams){
        this.params = Object.assign(this.params, newParams);
        var keys = Object.keys(this.params);
        var values = Object.values(this.params);
        var paramString = '?';
        for(let i = 0; i < keys.length; i++){
            paramString += keys[i] + '=' + values[i] + '&';
        }
        this.url = this.baseUrl + paramString;
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