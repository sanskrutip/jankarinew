import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { State } from 'src/app/ClassFiles/state';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { City } from 'src/app/ClassFiles/city';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import { Employee } from 'src/app/ClassFiles/employee';
import { formatDate } from '@angular/common';
import { Sort } from '@angular/material/sort';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { ToastrService } from 'ngx-toastr';
import { Favorite } from 'src/app/ClassFiles/favorite';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})


export class EmployeelistComponent implements OnInit {
  UserId;
  Userrole;
  finyear;
  UserActivity: UserActivity[];
  submited = new EventEmitter<string>();
  fevForm: FormGroup;
  state: State[];
  Distirct: Distirct[];
  city: City[];
  ProgramList: ProgramList[];
  Designationlist: Designationlist[];
  employeelist: Employee[];
  empcount: number;
  strwhr: string;
  sortedData: Employee[];
  lstwhere: Array<string>;
  array = [];
  StrWhere = "";
  ipAddress: string;
  model = new UserActivity('', '', '', '', '', '');
  ipadd;
  stringifiedData;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  fevoritelist: Favorite[];
  pgid;
  pgname;
  fevcount;
  where = "";
  closeResult: string;
  searchname;
  searchstate;
  searchcity;
  searchprogram;
  searchdesignation;
  Favwhr;
  favname;
  favURL;
  loading = true;
  toppings = new FormControl();
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService) {

    this.UserId = localStorage.getItem("UserId");
    this.Userrole = localStorage.getItem("role");
    this.pgid = localStorage.getItem("pgid");
    this.pgname = localStorage.getItem("pgname");
    this.Favwhr = route.snapshot.params["id"];
    this.favname = route.snapshot.params["id1"];
    this.favURL = route.snapshot.params["id2"];

    this.service = service;

    this.pageload();
    console.log(this.Userrole);


    this.service.GetName("FinanacialYear", "yearname", "status=0").subscribe((data: any) => {
      this.finyear = data;
      console.log("finyear" + this.finyear);
    })

    if (this.Favwhr != null && this.Favwhr != undefined) {
      if (this.Userrole == "R5") {
        this.strwhr = this.Favwhr + "and EmployeeProgram.reportto='" + this.UserId + "'";
        console.log("1finala where" + this.strwhr)
      }
      else if (this.Userrole == "R6") {
        this.strwhr = this.Favwhr;
        console.log("2finala where" + this.strwhr)
      }
      else {
        this.strwhr = this.Favwhr;
        console.log("3finala where" + this.strwhr)
      }
    }
    else {
      if (this.Userrole == "R5") {

        this.strwhr = "where EmployeeProgram.reportto='" + this.UserId + "'";

      }
      else if (this.Userrole == "R6") {
        this.strwhr = "";
      }
      else {
        this.strwhr = "";
      }
    }
    service.GetEmployeeList(this.strwhr).subscribe((data: any) => {
      this.employeelist = data;
      this.loading = false;
      console.log(this.employeelist);
    })
    this.service.GetEmployeeList(this.strwhr).subscribe((data: any) => {

      if (data == "") {

        this.empcount = 0;
      }
      else if (data == null && data[0] == null) {

        this.empcount = 0;
      }
      else {
        this.empcount = data[0].tRecordCount;
      }

      console.log(this.empcount);
    })
    service.EmployeeFavouriteList(this.UserId, this.pgid, this.Userrole, this.favURL, this.favname).subscribe((data: any) => {

      this.fevoritelist = data;
      console.log("fav" + this.fevoritelist.length)

      this.fevcount = this.fevoritelist.length

      if (this.fevcount == 1) {
        console.log("fav")


      }
      else {
        console.log("Notfav")


      }
    })

  }

  filterrecord() {

    this.loading = true;
    this.array = [];

    this.StrWhere = "";
    if (this.searchname != null && this.searchname != "" && this.searchname != "undefined" && this.searchname != "") {
      this.array.push("Employee.firstname%2B' '%2BEmployee.lastname like '%" + this.searchname + "%'");
    }

    if (this.searchstate != null && this.searchstate != "" && this.searchstate != "undefined" && this.searchstate != "Select") {

      var where = this.searchstate.toString();

      var stateWhere = this.getMultiSelectionWhere(where);

      this.array.push("Employee.state in (" + stateWhere + ")");
    }

    if (this.searchcity != null && this.searchcity != "" && this.searchcity != "undefined" && this.searchcity != "Select") {
      this.array.push("Employee.city in (" + this.getMultiSelectionWhere(this.searchcity.toString()) + ")");
    }

    if (this.searchprogram != null && this.searchprogram != "" && this.searchprogram != "undefined" && this.searchprogram != "Select") {

      this.array.push("EmployeeProgram.pgid='" + this.searchprogram + "'");
    }

    if (this.searchdesignation != null && this.searchdesignation != "" && this.searchdesignation != "undefined" && this.searchdesignation != "Select") {
      this.array.push("EmployeeProgram.desid='" + this.searchdesignation + "'");
    }
    console.log(this.Userrole);
    if (this.Userrole == "R5") {
      this.array.push("EmployeeProgram.reportto='" + this.UserId + "'");

    }

    if (this.array.length == 0) {
      this.where = this.StrWhere;
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
    this.where = this.StrWhere;

    this.service.GetEmployeeList(this.where).subscribe((data: any) => {

      this.employeelist = data;
      this.loading = false;
    })
    this.service.GetEmployeeList(this.where).subscribe((data: any) => {

      if (data == "") {

        this.empcount = 0;
      }
      else if (data == null && data[0] == null) {

        this.empcount = 0;
      }
      else {
        this.empcount = data[0].tRecordCount;
      }
    })


  }

  getMultiSelectionWhere(where) {

    var arr = where.split(',');
    var currentWhere = '';

    for (var i = 0; i < arr.length; i++) {
      currentWhere += "'" + arr[i] + "'";
      if (i + 1 != arr.length)
        currentWhere += ",";
    }
    return currentWhere;
  }

  onSelectState(stname) {
    console.log(stname);
    if (stname == "")
      this.city = null;
    else
      if (this.Userrole == "R5") {

        this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' and Employee.state='" + stname + "'").subscribe((data: any) => { this.city = data; })
      }
      else if (this.Userrole == "R6") {


        this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0  and Employee.state='" + stname + "'").subscribe((data: any) => { this.city = data; })


      }
      else {

        this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0  and Employee.state='" + stname + "'").subscribe((data: any) => { this.city = data; })

      }

  }

  display() {
    var divAddbutton = document.getElementById("divAddbutton");
    if (this.Userrole == "R5") {

      divAddbutton.style.display = "none";
    }
    else {
      divAddbutton.style.display = "block";
    }


  }

  pageload() {

    this.addressip();
    this.adduseractivity();
    if (this.Userrole == "R5") {
      this.service.FillDropDown("Employee", "distinct Employee.state", "Employee.state", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' order by Employee.state").subscribe((data: any) => { this.state = data; })

      this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "' order by Employee.city").subscribe((data: any) => { this.city = data; })


      this.service.FillDropDown("EmployeeProgram", "distinct Program.pgname", "EmployeeProgram.pgid", "inner join Program on Employeeprogram.pgid=Program.pgid where  EmployeeProgram.reportto='" + this.UserId + "' order by Program.pgname").subscribe((data: any) => { this.ProgramList = data; })

      this.service.FillDropDown("EmployeeProgram", "distinct Designation.desname", "EmployeeProgram.desid", "inner join Designation on Employeeprogram.desid=Designation.desid where  EmployeeProgram.reportto='" + this.UserId + "' order by  Designation.desname").subscribe((data: any) => { this.Designationlist = data; })


    }

    else if (this.Userrole == "R6") {

      this.service.FillDropDown("Employee", "distinct Employee.state", "Employee.state", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 order by Employee.state ").subscribe((data: any) => { this.state = data; })

      this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0   order by Employee.city").subscribe((data: any) => { this.city = data; })
      this.service.FillDropDown("EmployeeProgram", "distinct Program.pgname", "EmployeeProgram.pgid", "inner join Program on Employeeprogram.pgid=Program.pgid  order by Program.pgname").subscribe((data: any) => { this.ProgramList = data; })

      this.service.FillDropDown("EmployeeProgram", "distinct Designation.desname", "EmployeeProgram.desid", "inner join Designation on Employeeprogram.desid=Designation.desid  order by  Designation.desname ").subscribe((data: any) => { this.Designationlist = data; })


    }
    else {

      this.service.FillDropDown("Employee", "distinct Employee.state", "Employee.state", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 order by Employee.state").subscribe((data: any) => { this.state = data; })

      this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0  order by Employee.city").subscribe((data: any) => { this.city = data; })
      this.service.FillDropDown("EmployeeProgram", "distinct Program.pgname", "EmployeeProgram.pgid", "inner join Program on Employeeprogram.pgid=Program.pgid  order by Program.pgname").subscribe((data: any) => { this.ProgramList = data; })

      this.service.FillDropDown("EmployeeProgram", "distinct Designation.desname", "EmployeeProgram.desid", "inner join Designation on Employeeprogram.desid=Designation.desid  order by  Designation.desname ").subscribe((data: any) => { this.Designationlist = data; })


    }
  }

  adduseractivity() {
    this.ipadd = localStorage.getItem("IP");

    const activity: UserActivity = new UserActivity();
    activity.userid = this.UserId;
    activity.activity = "Visiting Employeelist";
    activity.pageurl = this.router.url;
    activity.prgid = "";
    activity.userip = this.ipadd;
    let date = new Date();
    activity.aLogDate = formatDate(date, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');

    this.service.InsertUserActivity(activity).subscribe((data: any) => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.display();
    this.fevForm = this.fb.group({
      fevname: ['', Validators.required],

    });
  }

  sortData(sort: Sort) {
    const data = this.employeelist.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;


    }

  }

  addressip() {
    this.service.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
      localStorage.setItem('IP', res.ip);
    });


  }

  public toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);


  }


  addfevorite() {
    console.log("fev where" + this.where);
    //  this.fevorite= this.router.url;
    const fev: Favorite = new Favorite();

    fev.userid = this.UserId;
    fev.pgid = this.pgid;
    fev.url = this.router.url;
    fev.roleid = this.Userrole;
    fev.whr = this.where;
    fev.favname = this.fevForm.value.fevname;

    console.log(fev)
    this.service.AddEmployeeFavourite(fev).subscribe((res) => {

      this.submited.emit(res.toString());
      console.log(res.toString());
      this.service.EmployeeFavouriteList(this.UserId, this.pgid, this.Userrole, this.favURL, this.favname).subscribe((data: any) => {

        this.fevoritelist = data;


        this.fevcount = this.fevoritelist.length
      });


      this.toastr.success("Add to Favorites");
    },
      error => {
        console.log(error);
      }
    )
  }



  removefevorite() {
    const fev: Favorite = new Favorite();

    fev.userid = this.UserId;
    fev.pgid = this.pgid;
    fev.url = this.favURL;
    fev.roleid = this.Userrole;
    fev.favname = this.favname;
    console.log(fev)
    this.service.AddEmployeeFavourite(fev).subscribe((res) => {

      this.submited.emit(res.toString());
      console.log(res.toString());
      this.service.EmployeeFavouriteList(this.UserId, this.pgid, this.Userrole, this.favURL, this.favname).subscribe((data: any) => {

        this.fevoritelist = data;


        this.fevcount = this.fevoritelist.length
      });

      this.toastr.error("Remove From Favorites");
    },
      error => {
        console.log(error);
      }
    )
  }


  open(content) {
    console.log("open(content)")
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
}
