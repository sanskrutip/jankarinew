import { Component, OnInit, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { MatTableDataSource } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Partner } from 'src/app/ClassFiles/partner';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-modeofpay',
  templateUrl: './modeofpay.component.html',
  styleUrls: ['./modeofpay.component.scss']
})
export class ModeofpayComponent implements OnInit {
  // user activity
  UserActivity: UserActivity[];
  model1 = new UserActivity('', '', '', '', '', '');
  ipAddress: string;
  ipadd;
  submited = new EventEmitter<string>();
  // end of user activity

  array = [];
  StrWhere = "";
  Userrole: string;
  ProgramList: ProgramList[];
  // usersData: any
  Departmentlist: Departmentlist[];
  // finanacialyearlist: FinancicalYear[];
  GetRptSalaryMod;
  rowData: any;
  UserId: string;
  Partner: Partner[];
  pgname;
  finyear
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router, private fb: FormBuilder, private toastr: ToastrService
  ) {
    this.UserId = localStorage.getItem("UserId");
    this.Userrole = localStorage.getItem("role");

    this.service = service;
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear", "yearname", "status=0").subscribe((data: any) => {
      this.finyear = data;

    })
    this.pageload();
    // service.GetProgramlist("").subscribe((data: any) => { this.ProgramList= data; })

    // service.GetFinanacialYearList().subscribe((data: any) => { this.finanacialyearlist = data; })
  }


  Show() {

    // this.service.GetRptSalaryMod().subscribe((data: any) => { this.GetRptSalaryMod = data; 
    //   this.dataSource = new MatTableDataSource(data);
    // })

  }

  onSelectProgram(pgid) {
    console.log(pgid);
    if (pgid == "")
      this.Departmentlist = null;
    else

      if (this.Userrole == "R5") {
        this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  EmployeeProgram.reportto='" + this.UserId + "' and  Department.pgid='" + pgid + "'").subscribe((data: any) => { this.Departmentlist = data; })
      }
      else if (this.Userrole == "R6") {
        this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  Department.pgid='" + pgid + "'").subscribe((data: any) => {
        this.Departmentlist = data;
          console.log(this.Departmentlist);
        })

      }

  }

  onSelectDept(depid) {
    console.log(depid);
    if (depid == "")
      this.Departmentlist = null;
    else

      if (this.Userrole == "R5") {
        this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where  EmployeeProgram.depid='" + depid + "' and employeepartner.status=0 and employee.status=0").subscribe((data: any) => { this.Partner = data; })
      }
      else if (this.Userrole == "R6") {
        this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where   EmployeeProgram.depid='" + depid + "' and employeepartner.status=0 and employee.status=0").subscribe((data: any) => { this.Partner = data; })

      }

  }

  save() {
    //  var newData = this.dataSource.data;
    //  console.log(newData);

    // this.service.AddEMPSalary(
    //   newData).subscribe(
    //     res => {


    //     });

  }




  ngOnInit() {

  }


  pageload() {
    this.addressip();
    this.adduseractivity();

    console.log(this.Userrole);
    if (this.Userrole == "R5") {
      this.service.FillDropDown("EmployeeProgram", "distinct Program.pgname", "EmployeeProgram.pgid", "inner join Program on Employeeprogram.pgid=Program.pgid where  EmployeeProgram.reportto='" + this.UserId + "'").subscribe((data: any) => { this.ProgramList = data; })

      this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid where  EmployeeProgram.reportto='" + this.UserId + "'").subscribe((data: any) => { this.Departmentlist = data; })

      this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where  employeepartner.status=0 and employee.status=0").subscribe((data: any) => {

        console.log(data);
        this.Partner = data;
      })



    }
    else if (this.Userrole == "R6") {
      console.log("enyet" + this.Userrole);
      this.service.FillDropDown("EmployeeProgram", "distinct Program.pgname", "EmployeeProgram.pgid", "inner join Program on Employeeprogram.pgid=Program.pgid ").subscribe((data: any) => { this.ProgramList = data; })

      this.service.FillDropDown("EmployeeProgram", "distinct Department.depname", "EmployeeProgram.depid", "inner join Department on Employeeprogram.depid=Department.depid ").subscribe((data: any) => { this.Departmentlist = data; })

      this.service.FillDropDown("EmployeePartner", "distinct partner.partnername", "EmployeePartner.partnerid", "left join Employee on EmployeePartner.empid=employee.empid left join EmployeeProgram on EmployeeProgram.empid=Employee.empid left join partner on partner.partnerid=EmployeePartner.partnerid where  employeepartner.status=0 and employee.status=0").subscribe((data: any) => {
        console.log(data);
        this.Partner = data;
      })


    }
  }


  filterrecord(searchprogram, searchdepartment, searchpartner, searchpay, searchmonth, searchyear) {


    this.array = [];
    var where = "";
    this.StrWhere = "";
    if (searchprogram != null && searchprogram != "" && searchprogram != "undefined" && searchprogram != "Select") {

      this.array.push("EmployeeProgram.pgid='" + searchprogram + "'");
    }
    if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined" && searchdepartment != "Select") {

      this.array.push("EmployeeProgram.depid='" + searchdepartment + "'");
    }

    if (searchpartner != null && searchpartner != "" && searchpartner != "undefined" && searchpartner != "Select") {
      this.array.push("Employee.partnerid='" + searchpartner + "'");
    }

    if (searchmonth != null && searchmonth != "" && searchmonth != "undefined" && searchmonth != "Select") {
      this.array.push("salmonth='" + searchmonth + "'");
    }
    if (searchyear != null && searchyear != "" && searchyear != "undefined" && searchyear != "Select") {
      this.array.push("salyear='" + searchyear + "'");
    }
    if (searchpay != null && searchpay != "" && searchpay != "undefined" && searchpay != "Select") {
      this.array.push("Employee.paytype='" + searchpay + "'");
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
    this.service.GetRptSalaryMod(where).subscribe((data: any) => {
      this.GetRptSalaryMod = data;
      console.log("abc" + this.GetRptSalaryMod)

    })

  }

  ExportReport(searchprogram, searchdepartment, searchpartner, searchpay, searchmonth, searchyear) {

    this.array = [];
    var where = "";
    this.StrWhere = "";

    if (searchprogram != null && searchprogram != "" && searchprogram != "undefined" && searchprogram != "Select") {

      this.array.push("EmployeeProgram.pgid='" + searchprogram + "'");
    }
    if (searchdepartment != null && searchdepartment != "" && searchdepartment != "undefined" && searchdepartment != "Select") {

      this.array.push("EmployeeProgram.depid='" + searchdepartment + "'");
    }

    if (searchpartner != null && searchpartner != "" && searchpartner != "undefined" && searchpartner != "Select") {
      this.array.push("Employee.partnerid='" + searchpartner + "'");
    }

    if (searchmonth != null && searchmonth != "" && searchmonth != "undefined" && searchmonth != "Select") {
      this.array.push("salmonth='" + searchmonth + "'");
    }
    if (searchyear != null && searchyear != "" && searchyear != "undefined" && searchyear != "Select") {
      this.array.push("salyear='" + searchyear + "'");
    }
    if (searchpay != null && searchpay != "" && searchpay != "undefined" && searchpay != "Select") {
      this.array.push("Employee.paytype='" + searchpay + "'");
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


    this.service.GetRptSalaryMod(where).subscribe((data: any) => {
      this.GetRptSalaryMod = data;

    });
    if (this.array.length == 0) {
      where = this.StrWhere;
    }
    else if (this.array.length == 1) {
      this.StrWhere = " where " + this.array[0].toString();
    }
    else {
      this.StrWhere = " where " + this.array[0].toString();
      for (let i = 1; i < this.array.length; i++) {
        this.StrWhere = this.StrWhere + " and " + this.array[i].toString();
      }


    }
    where = this.StrWhere;


    console.log(where)
    this.service.GetRptSalaryMod(where).subscribe((data: any) => {

      let new_list = data.map(function (obj) {
        return {
          pgname: obj.pgname,
          department: obj.department,
          employeename: obj.employeename,
          paytype: obj.paytype,
          accno: obj.accno,
          netamt: obj.netamt,
          partnername: obj.partnername,

        }
      });


      new AngularCsv(new_list, "Mode of payment", this.csvOptions);

    })



  }
  csvOptions = {

    quoteStrings: '"',
    decimalseparator: '.',

    useBom: true,
    noDownload: false,

    headers: ["Program", "Department", "Employee Name", "Payment mode", "Account Number", "Total Salary", "Partner Name"]
  };

  // user activity
  adduseractivity() {
    this.ipadd = localStorage.getItem("IP");

    const activity: UserActivity = new UserActivity();
    activity.userid = this.UserId;
    activity.activity = "Visiting Modeofpayment";
    activity.pageurl = this.router.url;
    activity.prgid = "";
    activity.userip = this.ipadd;
    let date = new Date();
    activity.aLogDate = formatDate(date, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');

    this.service.InsertUserActivity(activity).subscribe((data: any) => {
      console.log(data);
    })
  }


  addressip() {
    this.service.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
      localStorage.setItem('IP', res.ip);
    });


  }
  // end of user activity

}
