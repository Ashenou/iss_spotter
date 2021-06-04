//const { fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation,fetchISSFlyOverTimes } = require("./iss_promised");
const printPassTimes = require('./index');
nextISSTimesForMyLocation()
  .then((passTimes) => {
    fetchISSFlyOverTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });



// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then((body) => console.log(body));
