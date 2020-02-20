export class GenrateSalarySlip {
    
    constructor(
        public slid :number=0,
        public  empid :string="",
        public  month :string="",
        public  year :string="",
        public  requestby :string="",
        public requeston: Date = new Date(),
        public  approveby :string="",
        public approveon: Date = new Date(),
        public  status :number=0,
        public req:boolean = false,

        
        
        
   
    ){}
}
