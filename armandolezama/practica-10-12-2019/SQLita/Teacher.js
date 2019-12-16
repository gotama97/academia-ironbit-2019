import {Employee} from './Emplyee.js';

export class Teacher extends Employee {
    constructor(){
        super()
        this.__classHours = 0;
        this.__freeHours= 0;
        this.__assignedHours = 0;
    };

    setClassHours(classHours, day, subject, startHour){
        this.__classHours = classHours;
        for(let i = startHour; i <= startHour + classHours; i++){
            this.__schedule[day].occupyHour(i, subject)
        }
    };

    setFreeHours(freeHours){
        this.__freeHours = freeHours;
    };

    setAssignedHours(assignedHours){
        this.__assignedHours = assignedHours;
    };
};