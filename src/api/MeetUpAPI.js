import AjaxRequest from '../utils/AjaxRequest'

var url = 'https://api.meetup.com/find/upcoming_events'
var params = {
    sig_id: 249701286,
    lat: 38.59540,
    lon: -121.486,
    sig: 'ed6789b7b5d37f66964eeae887655760ab3b30dd',
    radius: 5
}

var MeetUpAPI = new AjaxRequest(url, data=>{console.log(data)}).setParam(params);


export function parseMeetup(data){
    var array = [];
    data.events.forEach(event => {
        if(('venue' in event)){
            array.push({
                name: event.name,
                description: event.description,
                lat: event.venue.lat,
                lng: event.venue.lon,
                id: event.id,
                key: event.id,
                visibility: event.visibility,
                start: event.time,          //UTC start time of the event, in milliseconds since the epoch

                duration: event.duration,   //Scheduled event duration in milliseconds, if an end time is specified by the organizer. 
                                            //When not present, a default of 3 hours may be assumed by applications

                link: event.link
            })
        }
        else{
            array.push({
                name: event.name,
                description: 'This event has limited visibility to the public.',
                lat: event.group.lat,
                lng: event.group.lon,
                // not available for non-public events
                // description: event.description,
                // lat: event.venue.lat,
                // lng: event.venue.lon,
                id: event.id,
                key: event.id,
                visibility: event.visibility,
                start: event.time,
                duration: event.duration,
                link: event.link
            })
        }
        
    });
    return array;
}


export default MeetUpAPI;