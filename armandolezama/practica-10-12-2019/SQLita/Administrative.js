import { Employee } from "./Emplyee.js";

export class Administrative extends Employee {
    constructor(){
        super()
    }
    setMeetings(startTime, day){
        this.__schedule[day].occupyHour(startTime, 'Meeting');
        this.__schedule[day].occupyHour(startTime + 1, 'Meeting');
        this.__schedule[day].occupyHour(startTime + 2, 'Meeting');
    }
    setAdministrativeWork(startTime, day){
        this.__schedule[day].occupyHour(startTime, 'Administrative Work');
        this.__schedule[day].occupyHour(startTime + 1, 'Administrative Work');
        this.__schedule[day].occupyHour(startTime + 2, 'Administrative Work');
        this.__schedule[day].occupyHour(startTime + 3, 'Administrative Work');
    }
}