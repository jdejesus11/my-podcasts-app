import moment from 'moment';

/**
 * Formats date in UTC (YYY-MM-DDTHH-MM-SSZ) to en-us time format MM/DD/YYYY
 * @param date 
 * @returns 
 */
export const toDate = (date:string): string => {
    return moment(date).format("MM/DD/YYYY");
}

/**
 * Formats miliseconds into MM:SS time format
 * @param millis time in miliseconds
 * @returns string
 */
export const toMinutesAndSecods = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
}


