import {Teacher} from './Teacher.js';

export class TeachersPlace extends Teacher {
    constructor(){
        super()
        this.__laborSeniorityInYears = 0;
    }

    addLaborSeniorityYear(){
        this.__laborSeniorityInYears++;
    }

    estimateFreeHours(){
        return Math.floor(this.__laborSeniorityInYears / 5);
    }
}