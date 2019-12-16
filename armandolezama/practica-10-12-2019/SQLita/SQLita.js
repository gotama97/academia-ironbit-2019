import {Subjects} from './Subjects.js'
import {TeachersHired} from './TeachersHired.js'
import {TeachersPlace} from './TeachersPlace.js'
import {Administrative} from './Administrative.js'

const system = new Subjects();
const manager = new Administrative();
const teacherWithPlace = new TeachersPlace();
const teacherWithContract = new TeachersHired();

const SQLita = {
    system, manager, teacherWithContract, teacherWithPlace
}

export default SQLita