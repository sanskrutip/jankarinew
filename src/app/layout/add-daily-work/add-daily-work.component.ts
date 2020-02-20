import { Component, OnInit,EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DailyWork } from 'src/app/ClassFiles/daily-work';

@Component({
  selector: 'app-add-daily-work',
  templateUrl: './add-daily-work.component.html',
  styleUrls: ['./add-daily-work.component.scss']
})
export class AddDailyWorkComponent implements OnInit {

  DailyworkForm: FormGroup;
  submited = new EventEmitter<string>();
  DailyWork:DailyWork[];
  model = new DailyWork(null,'','','','');
  meridian = true;
  today: string;
  UserId;
  Userrouteid;
  date
  date1;
  Userrole;
  pgid;
  constructor(private service: MasterServiceService,private toastr: ToastrService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) {
    this.UserId = localStorage.getItem("UserId");
    this.Userrouteid = route.snapshot.params["id"];
    this.date = route.snapshot.params["id1"];
   
    this.Userrole = localStorage.getItem("role");
    this.pgid = localStorage.getItem("pgid");
    this.service = service;

   
  if (this.Userrouteid== undefined){
    this.today = new Date().toISOString().split('T')[0];
    this.date1= this.today
    console.log("route "+ this.date1)
  }
  else{
    console.log("route Present")
this.date1=  this.date
console.log("route "+ this.date1)
  }
   }

  ngOnInit() {
    this.DailyworkForm = this.fb.group({
  
      rptdate: ['', Validators.required],
      sttime: ['', Validators.required],
      entime: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
     
      });
      // this.today = new Date().toISOString().split('T')[0];
  }


  AddDailywork(){
    const data:DailyWork = new DailyWork();
   data.reportdate = this.DailyworkForm.value.rptdate;
   
    data.starttime = this.DailyworkForm.value.sttime;
    data.endtime = this.DailyworkForm.value.entime;
    data.description = this.DailyworkForm.value.description;
    data.roleid = this.Userrole;
    data.pgid = this.pgid;
    data.status = this.DailyworkForm.value.status;
    console.log(data)

    this.service.AddUserDailyTaskA( this.UserId,data).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      console.log(res.toString());
      if (res.toString() === "ProperTime")
      {
      this.toastr.error ("Fill Proper Time");
      }
     else 
      {
        this.toastr.success ("Added SuccessFully");
      }
      this.router.navigate(['/DailyWorkList']);
     },
    error => {
      console.log(error);
    }
  );
}
}
