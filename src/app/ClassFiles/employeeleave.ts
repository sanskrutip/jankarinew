export class Employeeleave {
    constructor(

        public empid: string = "",
        public leavefrom: Date = new Date(),
        public leaveto: Date = new Date(),
        public leavetid: string = "",
        public leavedescription: string = "",
        public createdby: string = ""
        ) { }
}
