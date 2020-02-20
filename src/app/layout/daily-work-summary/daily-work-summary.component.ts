import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DailyWork } from 'src/app/ClassFiles/daily-work';

@Component({
  selector: 'app-daily-work-summary',
  templateUrl: './daily-work-summary.component.html',
  styleUrls: ['./daily-work-summary.component.scss']
})
export class DailyWorkSummaryComponent implements OnInit {
  Userid;
  date;
  DailyWork:DailyWork[];

  DailyWorkcount;
  Worksummary;
  Worksummarycount;
  dateTime = new Date();
  constructor(private service: MasterServiceService,
    private router: Router,private fb: FormBuilder, private route: ActivatedRoute ) {

    this.Userid = route.snapshot.params["id"];
    this.date = route.snapshot.params["id1"];
    console.log( this.Userid);
    console.log( this.date);
    service.GetUserDailyTaskList("and umain.userid='" + this.Userid + "' and convert (varchar,umain.reportdate,103)=convert(varchar,'" + this.date + "',103)").subscribe((data:any)=>{this.DailyWork=data;
      console.log(this.DailyWork)
      })
      service.GetUserDailyTaskList("and umain.userid='" + this.Userid + "' and convert (varchar,umain.reportdate,103)=convert(varchar,'" + this.date + "',103)").subscribe((data: any) => {  this.DailyWorkcount= data.length;})
      service.GetUserDailyReportList("where  Convert(date,UserDailyReport.reportdate,103)=convert(date,'" + this.date + "',103) and UserDailyReport.userid='" +this.Userid+ "'").subscribe((data:any)=>{this.Worksummary=data;
        console.log("Worksummary"+this.Worksummary)
        
        })

       
   }
  

  ngOnInit() {
  }
  Back(){
    this.router.navigate
    this.router.navigate(['/DailyWorkList']);
  }
}
