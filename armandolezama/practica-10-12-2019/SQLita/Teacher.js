import {Employee} from './Emplyee.js';

export class Teacher extends Employee {
    constructor(){
        super()
        this.__classHours = 0;
        this.__freeHours= 0;
        this.__assignedHours = 0;
    };

    setClassHours(classHours){
        this.__classHours = classHours;
    };

    setFreeHours(freeHours){
        this.__freeHours = freeHours;
    };

    setAssignedHours(assignedHours){
        this.__assignedHours = assignedHours;
    };
};