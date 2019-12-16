import {Teacher} from './Teacher.js';

export class TeachersHired extends Teacher {
    constructor(){
        super();
        this.__bondEachTenHours = 0
    }

    estimateBondsByHours(){
        this.__bondEachTenHours =  this.getAllOccupedHours() % 10
    }
}