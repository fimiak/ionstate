const request = new XMLHttpRequest();
let calendarItem = {};

request.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/primary/events?key=518317857808-2cn9btfgs5siq939dsh3ssa54danq4dh.apps.googleusercontent.com', true);

request.responseType = 'text';

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);
        for (let i = 0; i < data.articles.length; i++) {
            calendarItem = data.articles[i];
            return calendarItem;
        }
    } else {
        console.log('Reached server, returned error');
    }
};

console.log(request.responseText);
console.log(request);


request.onerror = function() {
    console.log('Connect error');
};

request.send(null);

export default request;