/**

Logic:
assuming that the array of arrrays guaranteed the first element to be people get on, last is people get off 

have a busPassengers variable

loop through busStops 
  have a variable called getOnBus
  have a variabel called leaveBus 

  add to the buspassengers the getOnBus and subtract the leaveBus
  

return busPassengers
*/

var number = function (busStops) {
    // Good Luck!
    let busPassengers = 0;

    for (let bus of busStops) {
        let getOnBus = bus[0];
        let leaveBus = bus[1];

        busPassengers += getOnBus - leaveBus;
    }

    return busPassengers;
}