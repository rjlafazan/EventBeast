import AjaxRequest from '../utils/AjaxRequest'

var url = 'https://api.meetup.com/find/upcoming_events'
var params = {
    sig_id:249701286,
    lat: 38.59540,
    lon: -121.486,
    sig: 'ed6789b7b5d37f66964eeae887655760ab3b30dd'
}

var MeetUpAPI = new AjaxRequest(url, data=>{console.log(data)}).setParam(params);


export function parseMeetup(data){
    var array = [];
    data.events.forEach(event => {
        if(!('venue' in event)){
            return;
        }
        array.push({
            name: event.name,
            description: event.description,
            lat: event.venue.lat,
            lng: event.venue.lon,
            id: event.id,
            key: event.id
        })
    });
    return array;
}


export default MeetUpAPI;