import moment from 'moment';
import { Episode } from '../models/models';

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

/**
 * Calculates time diffferences in hours
 * @param firstMiliseconds time in miliseconds
 * @param secondMiliseconds time in miliseconds
 * @returns hours between them
 */
export const getHourBetweenMiliseconds = (firstMiliseconds:number, secondMiliseconds: number) => {
    const hours = Math.floor((firstMiliseconds - secondMiliseconds) / 3600000);
    return hours < 0 ? -1 * hours : hours;
}

/**
 * Determines if hours is greater than 24 hours
 * @param hours time in hours
 * @returns true or false
 */
export const fetchDataFromServer = (hours: number) => hours > 24;


export const isStringEmpty = (value?:string) => {
    return /^\s*$/.test(value);
};
