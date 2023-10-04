/**
 * Goal: turn seconds into a twenty four hour clock 
 * 
 * input: seconds
 * output: 24 hour clock format 
 * 
 * Test Case:
 * 
 * 0 => 00:00:00
 * 5 => 00:00:05
 * 60 => 00:01:00
 * 
 * Logic: 
 * keep track of 
 *  hours
 *  minutes 
 *  seconds
 * 
 * While loop, while num is not 0
 *      add to one to the second tracker 
 *      subtract from seconds input  
 * 
 *      if second is 60
 *          add one to minute
 *          set second back to 0
 *      if minute is 60
 *          add one to hour 
 *          set minutes back to 0 
 * 
 */

export function humanReadable(seconds: number): string {
    if (seconds === 0) return '00:00:00'

    let secondsTracker: number = 0;
    let minutesTracker: number = 0;
    let hoursTracker: number = 0;


    while (seconds !== 0) {
        secondsTracker++;
        seconds--;

        if (secondsTracker === 60) {
            minutesTracker++;
            secondsTracker = 0;
        }

        if (minutesTracker === 60) {
            hoursTracker++;
            minutesTracker = 0;
        }
    }

    let secondsString: string = secondsTracker.toString();
    let minutesString: string = minutesTracker.toString();
    let hoursString: string = hoursTracker.toString();

    if (secondsString.length === 1) {
        secondsString = "0" + secondsString
    }

    if (minutesString.length === 1) {
        minutesString = "0" + minutesString
    }

    if (hoursString.length === 1) {
        hoursString = "0" + hoursString
    }

    return `${hoursString}:${minutesString}:${secondsString}`
}


/**
 * Better solution on codewars solution page
 * 
 * export function humanReadable(seconds:number):string {
  const minutes = Math.floor(seconds / 60)

  const onlySeconds = seconds % 60
  const onlyMinutes = minutes % 60
  const onlyHours = Math.floor(minutes / 60)
  
  return [onlyHours, onlyMinutes, onlySeconds].map(formatTime).join(':')
}

const formatTime = (time: number) :string => time >= 10 ? time.toString() : `0${time}`
 */