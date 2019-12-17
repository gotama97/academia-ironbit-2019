export class DayOfWeek {
    constructor(day){
        this.__day = day;
        this.__hours = [
            {
            hour: 1,
            subject: '',
            available: true}, 
        {
            hour: 2,
            subject: '',
            available: true}, 
        {
            hour: 3,
            subject: '',
            available: true}, 
        {
            hour: 4,
            subject: '',
            available: true}, 
        {
            hour: 5,
            subject: '',
            available: true}, 
        {
            hour: 6,
            subject: '',
            available: true}, 
        {
            hour: 7,
            subject: '',
            available: true}, 
        {
            hour: 8,
            subject: '',
            available: true}];
    };

    occupyHour(hour, subject){
        if(hour > 8 || hour < 1){
            console.error('Hour out of rank')
        } else {
            this.__hours[hour - 1].available = false;
            this.__hours[hour - 1].subject = subject;
        };
    };

    vacateHour(hour){
        if(hour > 8 || hour < 1){
            console.error('Hour out of rank')
        } else {
            this.__hours[hour - 1].available = true;
            this.__hours[hour - 1].subject = '';
        };
    };

    getOccupyHours(){
        let hours = [];
        for(const hour of this.__hours){
            if(hour.available){
                hours = [...hours, hour];
            };
        };
        return hours
    };

    getVacateHours(){
        let hours = [];
        for(const hour of this.__hours){
            if(!hour.available){
                hours = [...hours, hour];
            };
        };
        return hours
    };

    getAllHours(){
        return this.__hours;
    };
};

