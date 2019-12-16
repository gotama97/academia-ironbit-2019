import {DayOfWeek} from './DayOfWeek.js';

export class Employee {
    constructor(){
        this.__id = 0;
        this.__name = '';
        this.__freeHours = 0;
        this.__schedule =  {
            monday : new DayOfWeek('monday'), 
            thuesday: new DayOfWeek('thuesday'), 
            wednesday: new DayOfWeek('wednesday'), 
            thursday: new DayOfWeek('thursday'), 
            friday: new DayOfWeek('friday')};
    };
    getAllOccupedHours(){
        let allHours = 0;
        for(const day in this.__schedule){
            allHours += this.__schedule[day].getOccupyHours().length;
        }
        return allHours;
    }
};
