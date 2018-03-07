// var APIKEY = "trilogy";
// var query = "blade+runner"
// var URL = "http://www.omdbapi.com/?apikey=" + APIKEY + "&t=" + query;

// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })

export default class AjaxRequest {
    constructor(url, options, callback){
        this.url = url;
        this.options = options;
        this.callback = callback;
    }
    fetch(){
        fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.callback(data);
            })
    }
}