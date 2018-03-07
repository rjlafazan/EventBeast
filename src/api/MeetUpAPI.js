import AjaxRequest from '../utils/AjaxRequest'

var url = 'https://api.meetup.com/find/upcoming_events'
var params = {
    sig_id:249701286,
    lon: -73.981,
    lat: 40.6889,
    sig: 'ed6789b7b5d37f66964eeae887655760ab3b30dd'
}

var MeetUpAPI = new AjaxRequest(url, data=>{console.log(data)}).setParam(params);

export default MeetUpAPI;