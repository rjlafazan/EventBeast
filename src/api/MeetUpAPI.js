import AjaxRequest from '../utils/AjaxRequest'

var categories = [
    {
        name: "Outdoors & Adventure",
        id: 242,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=242&sig_id=249701286&fields=group_category&sig=516083ee2615b344ba3715778e5f767fb10cd47a'
    },
    {
        name: "Tech",
        id: 292,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=292&sig_id=249701286&fields=group_category&sig=be0ce1ea2ab75e18aad15f0bb221561d4ebc6da1'
    },
    {
        name: "Family",
        id: 232,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=232&sig_id=249701286&fields=group_category&sig=3d2b71c379a2c8db19fd25773e27afc1fae96a5a'
    },
    {
        name: "Health & Wellness",
        id: 302,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=302&sig_id=249701286&fields=group_category&sig=7b045b2530b5ea5292d6948f962ff89468dbd6f7'
    },
    {
        name: "Sports & Fitness",
        id: 282,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=282&sig_id=249701286&fields=group_category&sig=9fd555573b69ac40195d567767d9d2a31a1b88c2'
    },
    {
        name: "Learning",
        id: 562,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=562&sig_id=249701286&fields=group_category&sig=17fde64a2b8152bc541b4f01c0b4acecc889dadf'
    },
    {
        name: "Photography",
        id: 262,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=262&sig_id=249701286&fields=group_category&sig=48a500a3f0ba03ee5ed34fcc7278e07aa8635728'
    },
    {
        name: "Food & Drink",
        id: 162,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=162&sig_id=249701286&fields=group_category&sig=5502ceb9d1165b23e1d33f5d0482b194db80b562'
    },
    {
        name: "Writing",
        id: 582,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=582&sig_id=249701286&fields=group_category&sig=2be3a90e81bf3b8c0ffe5c173cea870f9cd5bcf2'
    },
    {
        name: "Language & Culture",
        id: 212,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=212&sig_id=249701286&fields=group_category&sig=693963bc9e2c52d5eb91fe603db91627754d8690'
    },
    {
        name: "Music",
        id: 512,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=512&sig_id=249701286&fields=group_category&sig=130ba9003c255d1e74a93158b20165275825365b'
    },
    {
        name: "Movements",
        id: 552,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=552&sig_id=249701286&fields=group_category&sig=914e711d4c1f8d36b7717a244aabd1a46ac0d7d6'
    },
    {
        name: "LGBTQ",
        id: 585,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=585&sig_id=249701286&fields=group_category&sig=86ad15b5939c0ceee3f88279353930686eabe5bd'
    },
    {
        name: "Film",
        id: 583,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=583&sig_id=249701286&fields=group_category&sig=d736d90fd8191399085c6ec202f7fa70ce3ed1c0'
    },
    {
        name: "Sci-Fi & Games",
        id: 182,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=583&sig_id=249701286&fields=group_category&sig=d736d90fd8191399085c6ec202f7fa70ce3ed1c0'
    },
    {
        name: "Beliefs",
        id: 132,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=132&sig_id=249701286&fields=group_category&sig=aa774cda294045481b6da37b1535969549e28f9e'
    },
    {
        name: "Arts",
        id: 122,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=122&sig_id=249701286&fields=group_category&sig=01a28477928aa779c1be5e4e42c5a42b36e44bba'
    },
    {
        name: "Book Clubs",
        id: 222,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=222&sig_id=249701286&fields=group_category&sig=7987c09fd2fe0ed51261059d975277aa703328e7'
    },
    {
        name: "Dance",
        id: 542,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=542&sig_id=249701286&fields=group_category&sig=8b15f920a186e6942cee302fa59f2f81e981573e'
    },
    {
        name: "Pets",
        id: 252,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=252&sig_id=249701286&fields=group_category&sig=b49dc610b801c786669aeb5b23386513f726dfc7'
    },
    {
        name: "Hobbies & Crafts",
        id: 532,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=532&sig_id=249701286&fields=group_category&sig=bf7e4b1b476160a147dbf18f4270b47673aa6dd7'
    },
    {
        name: "Fashion & Beauty",
        id: 584,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=584&sig_id=249701286&fields=group_category&sig=5925d1c24d0f79909b996e733f00fc6e7cd096ad'
    },
    {
        name: "Social",
        id: 272,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=272&sig_id=249701286&fields=group_category&sig=71187747636caa5eb801fb95da5117363c859a62'
    },
    {
        name: "Career & Business",
        id: 522,
        url: 'https://api.meetup.com/find/upcoming_events?topic_category=522&sig_id=249701286&fields=group_category&sig=f40b9a088d92ee77bb378758e7b4c6caec39cc4a'
    }
]

var url = 'https://api.meetup.com/find/upcoming_events'
var params = {
    sig_id: 249701286,
    lat: 38.59540,
    lon: -121.486,
    sig: 'ed6789b7b5d37f66964eeae887655760ab3b30dd',
    radius: 5
}

var MeetUpAPI = new AjaxRequest(url, data=>{console.log(data)}).setParam(params);
var MeetUpCategories = [];
MeetUpCategories.push(MeetUpAPI);
for(var i = 0; i < categories.length; i++){
    var newAjaxRequest = new AjaxRequest(categories[i].url, data=>{console.log(data.data)});
    MeetUpCategories.push(newAjaxRequest);
}


export function parseMeetup(data){
    var array = [];
    data.events.forEach(event => {
        if(Object.keys(event).length === 0 ){
            return;
        }
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
export {categories, MeetUpCategories};