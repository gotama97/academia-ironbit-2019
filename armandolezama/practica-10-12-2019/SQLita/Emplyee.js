import {DayOfWeek} from './DayOfWeek.js';

export class Employee {
    constructor(){
        this.__id = 0;
        this.__name = '';
        this.__freeHours = 0;
        this.__schedule = [ 
            new DayOfWeek('monday'), 
            new DayOfWeek('thuesday'), 
            new DayOfWeek('wednesday'), 
            new DayOfWeek('thursday'), 
            new DayOfWeek('friday')];
    };
};
