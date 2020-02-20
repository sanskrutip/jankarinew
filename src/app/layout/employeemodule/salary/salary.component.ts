import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, NavigationStart, NavigationEnd,Event, RouterEvent } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatProgressButtonOptions } from 'mat-progress-buttons'
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { EmployeeNameList } from 'src/app/ClassFiles/employee-name-list';
import { Salary } from 'src/app/ClassFiles/salary';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {

  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Show',
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

  strwhr: string;
  lstwhere: Array<string>;
  array = [];
  StrWhere = "";
  searchmonth: string;
  searchyear: string;
  searchfiyear: string;

  name1 = 'Angular';
  domains = [];
  result: number;
  name: number;
  reg_date: number;
  isVisible: boolean = false;
  salary: Salary[];
  ProgramList: ProgramList[];
  EmployeeNameList: EmployeeNameList[];
  Departmentlist: Departmentlist[];
  model = new Salary('', '', '');
  SalaryForm: FormGroup;
  UserID: string;
  Userrole: string;
  pgname;
  finyear;
  closeResult: string;
  public loading: boolean;
  @ViewChild("content", {static: false}) modalContent: TemplateRef<any>;
  @ViewChild("content", {static: false}) modalContent1: TemplateRef<any>;
  constructor(private service: MasterServiceService,private modalService: NgbModal, private router: Router, private fb: FormBuilder, private toastr: ToastrService
  ) {
    
    this.UserID = localStorage.getItem('UserId');
    this.Userrole = localStorage.getItem('role');
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
// start
this.pageload();
this.router.events.subscribe((RouterEvent:Event) => {
  if(RouterEvent instanceof NavigationStart){
    this.showLoadingIndicator=true;
  }
  if(RouterEvent instanceof NavigationEnd){
    this.showLoadingIndicator=false;
  }
});
// end

    this.service = service;
  }

  
  onSelectPro(pgid) {

    console.log(pgid);
    if (pgid == "")
      this.Departmentlist = null;
    else
     
    if (this.Userrole == "R5") {
      this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  EmployeeProgram.reportto='" + this.UserID+ "' and  Department.pgid='" + pgid + "'").subscribe((data: any) => { this.Departmentlist = data; })
    }
    else if (this.Userrole == "R6") {
      this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  Department.pgid='" + pgid + "'").subscribe((data: any) => { this.Departmentlist = data; })

    }
    else if (this.Userrole == "R78") {
      this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  Department.pgid='" + pgid + "'").subscribe((data: any) => { this.Departmentlist = data; })

    }
  }
  editDomain(domain: any) {
    domain.editable = !domain.editable;
  }


  ngOnInit() {
    this.SalaryForm = this.fb.group({
      pgid: ['', Validators.required],
      depid: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      financialyear: ['', Validators.required],
    });
  }

  Show(searchpro, searchdep, searchmonth, searchyear, searchfiyear) {
    
    this.loading = true;
    console.log("Hi");
    console.log(  this.Userrole, searchpro, searchdep, this.UserID, searchmonth, searchyear, searchfiyear);
    this.service.CheckAttendace(this.Userrole, searchpro, searchdep, this.UserID, searchmonth, searchyear).subscribe((data: any) => {
      console.log(data[0].Result);
      if (data[0].Result == "Failure") {
         alert("Attendance is not available Please fill attendance first");
        //attendancepage
     // this.showModal();
       this.router.navigate(['/GenerateAttendance',this.Userrole, searchpro, searchdep, this.UserID, searchmonth, searchyear, searchfiyear]);
     
      }
      else if(data[0].Result == "Biometric")
      {
        alert("Biometric Attendance is not available Please upload attendance first");
       
       //this.showModal1();
      }
      else if (data[0].Result == "Success") {
        this.router.navigate(['/GenerateSalary',this.Userrole, searchpro, searchdep, this.UserID, searchmonth, searchyear, searchfiyear]);
      }
    })
  }

  pageload()
{
  if(this.Userrole=="R5" )
  {
 this.service.FillDropDown("EmployeeProgram","distinct Program.pgname","EmployeeProgram.pgid","inner join Program on Employeeprogram.pgid=Program.pgid where  EmployeeProgram.reportto='"+  this.UserID +"'").subscribe((data:any)=>{this.ProgramList=data;})
  
  this.service.FillDropDown("EmployeeProgram","distinct Department.depname","EmployeeProgram.depid","inner join Department on Employeeprogram.depid=Department.depid where  EmployeeProgram.reportto='"+  this.UserID +"'").subscribe((data:any)=>{this.Departmentlist=data;})
}
else if(this.Userrole=="R6" ) {

  this.service.FillDropDown("Program","distinct Program.pgname","Program.pgid"," ").subscribe((data:any)=>{this.ProgramList=data;})
  this.service.FillDropDown("Department","distinct Department.depname","Department.depid","").subscribe((data:any)=>{this.Departmentlist=data;})

}
else if(this.Userrole=="R78" ) {

  this.service.FillDropDown("Program","distinct Program.pgname","Program.pgid"," ").subscribe((data:any)=>{this.ProgramList=data;}) 
  this.service.FillDropDown("Department","distinct Department.depname","Department.depid","").subscribe((data:any)=>{this.Departmentlist=data;})

}
}
showModal() {
  this.modalService.open(this.modalContent).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

showModal1() {
  this.modalService.open(this.modalContent1).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}



private getDismissReason(reason: any): string {


  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }

}

Refresh(){
  this.router.navigateByUrl('/Dashboard', {skipLocationChange: true}).then(()=>  
           this.router.navigate(['/Salary']));
}


redirect(searchpro, searchdep, searchmonth, searchyear, searchfiyear){
this.router.navigate(['/GenerateAttendance',   this.Userrole, searchpro, searchdep, this.UserID, searchmonth, searchyear, searchfiyear]);
     
}
}