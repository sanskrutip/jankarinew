export class Organisation {

    constructor(

        
        
        public ogname: string = "",
        public ogcontactperson:string = "",
        public ogcontact: string = "",
        public ogemail: string = "",
        public ogusername: string = "",
        public ogpassword: string = "",
        public registerdate: Date = new Date(),
        public address: string = "",
        public state : string = "",
        public district:  string = "",
        public city: string = "",
        public pincode: number= 0,
        public logo: string = "",
        public theme: string = "",
        public status: string = "",
       
        

    ) { }
}
