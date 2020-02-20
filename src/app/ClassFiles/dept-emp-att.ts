export class DeptEmpAtt {
    constructor(
        public  empid :string="",
        public  empname :string="",
        public  empcode : number= 0,
        public  depid :string="",
        public  depname :string="",
        public  month1 :string="",
        public  month : number= 0,
        public  year : number= 0,
        public  totalwh : number= 0,
        public  totallate : number= 0,
        public  totalot : number= 0,
        public  presentdays : number= 0,
        public  totabsent : number= 0,
        public  totworking : number= 0,
        public  latemark : number= 0,
        public  halfday : number= 0,
        public  tRecordCount : number= 0, 
    ){}
}
