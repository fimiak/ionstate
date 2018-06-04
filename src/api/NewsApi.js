const request = new XMLHttpRequest();
let story = {};

request.open('GET', 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=3990f9aab5b046b5aeb3e089ca3e37dc', true);

request.responseType = 'text';

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);
        for (let i = 0; i < data.articles.length; i++) {
            story = data.articles[i];
            return story;
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