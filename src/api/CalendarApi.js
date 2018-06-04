
// Client ID and API key from the Developer Console
var CLIENT_ID = '518317857808-2cn9btfgs5siq939dsh3ssa54danq4dh.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
    }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listUpcomingEvents();
    } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents() {
    gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 7,
    'orderBy': 'startTime'
    }).then(function(response) {
    var events = response.result.items;

    if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = '';
        let regx = /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/;
        let regDate = event.start.date.match(regx); // Regex article date out of raw data.
        let monthParse = regDate[09];
        let month = months[Math.floor(monthParse)-1];
        if (!when) {
            when = event.start.date;
        }
        appendPre(event.summary + ' (' + when + ')')
        document.getElementsByClassName('week-details')[i].getElementsByTagName('span')[0].innerHTML = event.summary;
        document.getElementsByClassName('week-day')[i].innerHTML = month || 'To Be Determined';
        document.getElementsByClassName('week-date')[i].getElementsByTagName('span')[0].innerHTML = regDate[10] || 1;
        document.getElementsByClassName('week-details')[i].getElementsByTagName('img')[0].src = event.description || 'https://blackthen.com/wp-content/uploads/2015/11/congress.jpg';
        document.getElementsByClassName('week-details')[i].getElementsByTagName('a')[0].href = event.location;
        }
    } else {
        appendPre('No upcoming events found.');
    }
    });
}