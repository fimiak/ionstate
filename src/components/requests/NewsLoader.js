import axios from 'axios';
import testdata from './../../data/testdata.json';

let fetchedNews = testdata;

function NewsLoader(name) {
  const nytimes = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${name}&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48`;
  axios.get(nytimes)
    .then((response) => {
      fetchedNews = response.data.response.docs;
    })
    .catch((error) => {
      console.log('Error fetching data', error);
    });
}

NewsLoader('may, theresa');

export default { fetchedNews };
