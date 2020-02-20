import { Component, OnInit, EventEmitter } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DailyWork } from 'src/app/ClassFiles/daily-work';


@Component({
  selector: 'app-daily-work-list',
  templateUrl: './daily-work-list.component.html',
  styleUrls: ['./daily-work-list.component.scss']
})
export class DailyWorkListComponent implements OnInit {
  DailyWork: DailyWork[];
  UserId;
  DailyWorkcount;
  strwhr: string;
  lstwhere: Array<string>;
  array = [];
  StrWhere = "";
  Userrole;
  pgid;
  pgname;
  employeelist;
username;
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {

    this.service = service;

    this.UserId = localStorage.getItem("UserId");
    this.Userrole = localStorage.getItem("role");
    this.pgid = localStorage.getItem("pgid");
    this.pgname = localStorage.getItem("pgname");
    
    service.GetName("Usermaster","fullname","userid='" + this.UserId + "'").subscribe((data: any) => {
      this.username = data;
       
      })
    service.GetUserDailyTaskList(" And umain.userid='" + this.UserId + "'").subscribe((data: any) => {
    this.DailyWork = data;
      console.log(this.DailyWork)
    })
    service.GetUserDailyTaskList(" And umain.userid='" + this.UserId + "'").subscribe((data: any) => { this.DailyWorkcount = data.length; })
    this.pageload();

  }

  ngOnInit() {
  }
  
  Summaryroute(id, date) {
    date =
      this.router.navigate(['/DailyWorkSummary', id, date])
  }


  filterrecord(searchdate,searchname,searchmonth) {
    this.array = [];
    var where = "";
    this.StrWhere = "";


    if (searchdate != null && searchdate != "" && searchdate != "undefined" && searchdate != "dd/mm/yyyy") {
      this.array.push("Convert(date,umain.reportdate)=convert(date,'" + searchdate + "',111)");
    }
    if (searchname != null && searchname != "" && searchname != "undefined" && searchname != "Select") {
      this.array.push("umain.userid='"+ searchname+"'");
    }
    if (searchmonth != null && searchmonth != "" && searchmonth != "undefined" && searchmonth != "Select") {
      this.array.push("DATEPART(mm,umain.reportdate)='"+searchmonth+"'") ;
    }
    if (this.array.length == 0) {
      where = this.StrWhere;
    }
    else if (this.array.length == 1) {
      this.StrWhere = " and " + this.array[0].toString();
    }
    else {
      this.StrWhere = " and " + this.array[0].toString();
      for (let i = 1; i < this.array.length; i++) {
        this.StrWhere = this.StrWhere + " and " + this.array[i].toString();
      }

    }
    where = this.StrWhere;

    console.log(where);


    this.service.GetUserDailyTaskList(where).subscribe((data: any) => {
    this.DailyWork = data;
      console.log(this.DailyWork)
    })
    this.service.GetUserDailyTaskList(where).subscribe((data: any) => {

      if (data == "") {

        this.DailyWorkcount = 0;
      }
      else if (data == null && data[0] == null) {

        this.DailyWorkcount = 0;
      }
      else {
        this.DailyWorkcount = data[0].tRecordCount;
      }
    })
  }

  pageload() {  
    
    this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join EmployeeProgram on employee.empid=EmployeeProgram.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })    

//     if (this.pgid == "P1" && this.Userrole == "R5") {
//       //Team Leader
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname", "Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.empid='" + this.UserId + "'").subscribe((data: any) => { this.employeelist = data; })
//     }
//     else if (this.pgid == "P1" && this.Userrole == "R29") {
//       //PC
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })    }
//     else if (this.pgid == "P1" && this.Userrole == "R3") {
//       //OH
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })    }
//     else if (this.pgid == "P6" && this.Userrole == "R47") {
//       //Fellow
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname", "Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.empid='" + this.UserId + "'").subscribe((data: any) => { this.employeelist = data; })
//     }
//     else if (this.pgid == "P6" && this.Userrole == "R35") {
//       //Fellow
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname", "Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.empid='" + this.UserId + "'").subscribe((data: any) => { this.employeelist = data; })
//     }
//     else if (this.pgid == "P6" && this.Userrole == "R59") {
//       //CC
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })    }
//     else if (this.pgid == "P6" && this.Userrole == "R9") {
//       //CC
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })    }
//     else if (this.pgid == "P6" && this.Userrole == "R33") {
//       //CC
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })   
//      }
//     else if (this.pgid == "P6" && this.Userrole == "R60") {
//       //PC
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; }) 
//        }
//     else if (this.pgid == "P6" && this.Userrole == "R20") {
//       //PC
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })  
//       }
//     else if (this.pgid == "P6" && this.Userrole == "R28") {
//       //OH
//   this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })   
//  }
//     else if (this.pgid == "P6" && this.Userrole == "R43") {
//       //PRogr Manager
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })    
//     }
//     else {
//       this.service.FillDropDown("Employee", "distinct Employee.firstname%2B' '%2BEmployee.lastname","Employee.empid", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid left join userprogram on userprogram.userid=employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and EmployeeProgram.pgid='" + this.pgid + "'").subscribe((data: any) => { this.employeelist = data; })
//     }
  }
}
