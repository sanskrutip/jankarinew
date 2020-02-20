export class DailyWork {

    
    constructor(
        public reportdate : Date = new Date(),
        public starttime  :string="",
        public endtime   :string="",
        public description :string="",
        public roleid :string="",
        public pgid :string="",
        public status   :string=""
   
    ){}
}
