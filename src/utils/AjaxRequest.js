import fetchJsonp from 'fetch-jsonp';

export default class AjaxRequest {
    constructor(baseUrl, callback, options = {}){
        this.baseUrl = baseUrl;
        this.options = options;
        this.callback = callback;
        this.url = this.baseUrl;
    }
    setParam(params){
        var keys = Object.keys(params);
        var values = Object.values(params);
        var paramString = '?';
        for(let i = 0; i < keys.length; i++){
            paramString += keys[i] + '=' + values[i] + '&';
        }
        this.url = this.baseUrl + paramString;
        return this;
    }
    setCallBack(callback){
        this.callback = callback;
    }
    getUrl(){
        return this.url;
    }
    fetchP(){
        fetchJsonp(this.url)
            .then(response => response.json())
            .then(data => {
                this.callback(data.data);
            })
    }
    fetch(){
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.callback(data);
            })
    }
}