
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
// const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);
  };
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
// const returnLastTwoDrivers = drivers => drivers.slice(-2);
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
// const createFareMultiplier = multiplier => fare => fare * multiplier;
  };
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
// const selectDifferentDrivers = (drivers, driverFunction) => driverFunction(drivers);

  };




  
