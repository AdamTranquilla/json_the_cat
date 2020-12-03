const request = require('request');
const [breedName] = process.argv.splice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search';
const urlQuery = url + '?q=' + breedName;

request(urlQuery, (error, response, body) => {
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('breed is not found');
    return;
  }
  if (!response.status === 200) {
    throw error;
  }
  console.log(data[0]);
});