//const { fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss_promised');
const {
  nextISSTimesForMyLocation,
  fetchISSFlyOverTimes,
  fetchCoordsByIP,fetchMyIP
} = require("./iss_promised");
//const printPassTimes = require('./index');


fetchMyIP().then((body) => console.log(body));


const printPassTimes = (passtimes) => console.log(passtimes);
// Call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });


fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((body) => console.log(body));
