import { Component, OnInit ,EventEmitter,ViewChild} from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Getempsalary } from 'src/app/ClassFiles/getempsalary';
import { SelectionModel } from '@angular/cdk/collections';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-generatesalary',
  templateUrl: './generatesalary.component.html',
  styleUrls: ['./generatesalary.component.scss']
})
export class GeneratesalaryComponent implements OnInit {

  // spinner
  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Save',
    spinnerSize: 18,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'primary',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  
  }

  showLoadingIndicator = true;

  // end of spinner
 
  
  UpdateForm:FormGroup
  Getempsalary:Getempsalary[];
  displayedColumns: string[] = [ 'approve','employeename', 'grosssalary', 'absentday', 'basicsal','hra','ta','oa','absentamt',
  'epfamt','esicamt','tds','pt','telephone','advance','loan','totdeduct','netsalary','epfamt2','esicamt2','ctc','remark'];
  dataSource: MatTableDataSource<Getempsalary>;
  selection = new SelectionModel<Getempsalary>(true, []);

  isAllSelected() {
   
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    
    return numSelected === numRows;
    
  }

  
  masterToggle(ref) {

    if (this.isSomeSelected()) {
      
      this.selection.clear();
    ref.checked=false;
      
    } else {
      this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    }
    console.log(ref);
  }

  isSomeSelected() {
    
    return this.selection.selected.length > 0;
  }
  fineyear=0;
  role="";
  pgid="";
  depid="";
  userid="";
  month= 0;
  year=0;
  monthname="";
  UserId;
  // work:Totworking;
  submited = new EventEmitter<string>();
  // model = new Totworking('');
  UserActivity:UserActivity[];
model = new UserActivity('','','','','','',);
ipAddress:string;  
 ipadd;
 pgname;
 finyear
  constructor(private toastr: ToastrService,private service: MasterServiceService, private router: Router, private route: ActivatedRoute,private fb: FormBuilder) { 
    this.role=route.snapshot.params["id"];
    this.pgid = route.snapshot.params["id1"];
    this.depid = route.snapshot.params["id2"];
    this.userid=route.snapshot.params["id3"];
    this.month = route.snapshot.params["id4"];
    this.year = route.snapshot.params["id5"];
    this.fineyear = route.snapshot.params["id6"];
    this.UserId = localStorage.getItem("UserId");
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    service.GetEmpSalary(this.role,this.pgid, this.depid, this.userid, this.month, this.year).subscribe((data: any) => { 
           

      this.dataSource  = new MatTableDataSource(data);

      console.log();
    })
  }
  
  totworking = new FormControl();
  save() {
    var newData = this.dataSource.data;
if(this.month==1){

  this.monthname="January";
}
else if(this.month==2){
  this.monthname="February";
}
else if(this.month==3){
  this.monthname="March";
}

else if(this.month==4){
  this.monthname="April";
}

else if(this.month==5){
  this.monthname="May";
}

else if(this.month==6){
  this.monthname="June";
}

else if(this.month==7){
  this.monthname="July";
}

else if(this.month==8){
  this.monthname="August";
}
else if(this.month==9){
  this.monthname="September";

}
else if(this.month==10){
  this.monthname="October";
}
else if(this.month==11){
  this.monthname="November";
}
else if(this.month==12){
  this.monthname="December";
}

console.log( newData,this.depid,this.monthname, this.year ,this.fineyear,this.userid);

    this.service.AddSalary(this.depid,this.monthname, this.year ,this.fineyear,this.userid, newData).subscribe(
        res => {

          if(res=='Success'){
            this.toastr.success ("update SuccessFully");          
          this.router.navigate(['/SalaryList']);
          }
          else if (res=='Failure') {
         
            this.toastr.success ("update Failed" );          
          this.router.navigate(['/GenerateSalary/:id/:id1/:id2/:id3/:id4/:id5/:id6']);
          }
         
        });

  }
  
  ngOnInit() {
    this.addressip();
    this.adduseractivity();
  }

  someFunc(): void {
    this.spinnerButtonOptions.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions.active = false;
    }, 95000)
  }
  adduseractivity()
  {
    this.ipadd = localStorage.getItem("IP");
  
    const activity: UserActivity = new UserActivity();
    activity.userid = this.UserId ;
    activity.activity = "Visiting GenerateSalary";
    activity.pageurl = this.router.url;
    activity.prgid = "";
    activity.userip =   this.ipadd ;
    let date =new Date();
    activity.aLogDate = formatDate(date, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');
  
    this.service.InsertUserActivity(activity).subscribe((data: any) => {
      console.log(data);
    })
  }
  
  
  addressip()
  {  this.service.getIPAddress().subscribe((res:any)=>{
    this.ipAddress=res.ip;
  localStorage.setItem('IP', res.ip);
  });
  
  
  }
}
