

export class Subjects {
    constructor(){

    };

    setClass(teacher, hour, subject, day){
        teacher.__schedule[day].occupyHour(hour, subject);
    }
    setBreak(employee, hour, day){
        employee.__schedule[day].occupyHour(hour, 'Break');
    }
    setMeetings(administrative, startTime, day){
        administrative.__schedule[day].occupyHour(startTime, 'Meeting');
        administrative.__schedule[day].occupyHour(startTime + 1, 'Meeting');
        administrative.__schedule[day].occupyHour(startTime + 2, 'Meeting');
    }
    setAdministrativeWork(administrative, day){
        administrative.__schedule[day].occupyHour(startTime, 'Administrative Work');
        administrative.__schedule[day].occupyHour(startTime + 1, 'Administrative Work');
        administrative.__schedule[day].occupyHour(startTime + 2, 'Administrative Work');
        administrative.__schedule[day].occupyHour(startTime + 3, 'Administrative Work');
    }

};