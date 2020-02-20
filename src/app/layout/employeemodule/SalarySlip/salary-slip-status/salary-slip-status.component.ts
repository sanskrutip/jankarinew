import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Favorite } from 'src/app/ClassFiles/favorite';
import { Sort } from '@angular/material';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/ClassFiles/employee';
import { Designationlist } from 'src/app/ClassFiles/designationlist';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { City } from 'src/app/ClassFiles/city';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { State } from 'src/app/ClassFiles/state';

@Component({
  selector: 'app-salary-slip-status',
  templateUrl: './salary-slip-status.component.html',
  styleUrls: ['./salary-slip-status.component.scss']
})
export class SalarySlipStatusComponent implements OnInit {

  UserId;
  Userrole;
  salsalip;
  UserActivity: UserActivity[];
  submited = new EventEmitter<string>();
  fevForm: FormGroup;
  state: State[];
  Distirct: Distirct[];
  city: City[];
  ProgramList: ProgramList[];
  Designationlist;
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
  searchdepartment;
  searchmonth;
  searchyear;
  Favwhr;
  favname;
  favURL;
  loading = true;
  Departmentlist;
  finyear;
  constructor(private service: MasterServiceService, private modalService: NgbModal, private router: Router, private fb: FormBuilder,private route: ActivatedRoute, private toastr: ToastrService) {
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
 var StrWhere = SalarySlipStatusComponent.GenUsrSalGenarateSlip("", this.UserId , this.Userrole,"");
    this.service.GetSalarySlipRequestList(StrWhere).subscribe((data:any) =>
    {
      this.salsalip = data;
    });
  

if( this.Favwhr!=null &&  this.Favwhr!=undefined)
{
  if (this.Userrole == "R5") {


    this.strwhr =  this.Favwhr + "and EmployeeProgram.reportto='" + this.UserId + "'";
 console.log("1finala where"+    this.strwhr)
  }
  else if (this.Userrole == "R6") {
    this.strwhr =   this.Favwhr ;
    console.log("2finala where"+    this.strwhr)
  }
  else {
    this.strwhr =   this.Favwhr ;
    console.log("3finala where"+    this.strwhr)
  }
  }
  else
  {
    if (this.Userrole == "R5") {

      this.strwhr =   "where EmployeeProgram.reportto='" + this.UserId + "'";

    }
    else if (this.Userrole == "R6") {
      this.strwhr =   "" ;
    }
    else {
      this.strwhr = "" ;
    }
  }
    service.GetSalarySlipRequestList(this.strwhr).subscribe((data: any) => {
      this.employeelist = data;
      this.loading = false;
      console.log(this.employeelist);
    })
    this.service.GetSalarySlipRequestList(this.strwhr).subscribe((data: any) => {

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
    service.EmployeeFavouriteList(this.UserId, this.pgid, this.Userrole,this.favURL,this.favname).subscribe((data: any) => {

      this.fevoritelist = data;
      console.log("fav"+this.fevoritelist.length)

      this.fevcount = this.fevoritelist.length

      if (this.fevcount == 1) {
        console.log("fav")

       
      }
      else {
        console.log("Notfav")

      
      }
    })




  }
  public static GenUsrSalGenarateSlip(whr,  us,  ur, og){
    var UserWhr = "";

    if (ur == "Accountant" || ur == "Team Leader" || ur == "BillingDep")
    {
        if (whr == "")
        {
            UserWhr = "where Employee.salapproval='" + us + "'  and Employee.status=0";
            return UserWhr;
        }
        else
        {
            UserWhr = " and Employee.salapproval='" + us + "' and Employee.status=0";
            return UserWhr;
        }
    }

    else if (ur == "Operation Head")
    {
        if (whr == "")
        {
            UserWhr = "where Employee.salapproval='" + us + "'  and Employee.status=0";
            return UserWhr;
        }
        else
        {
            UserWhr = " and Employee.salapproval='" + us + "'  and Employee.status=0";
            return UserWhr;
        }
    }
    else if (ur == "Program Co-Ordinator" || ur == "Program Co-Ordinator_NDLM")
    {
        if (whr == "")
        {
            UserWhr = "where Employee.salapproval='" + us + "' and Employee.status=0";
            return UserWhr;
        }
        else
        {
            UserWhr = " and Employee.salapproval='" + us + "' and Employee.status=0";
            return UserWhr;
        }
    }
    else if (ur == "Program Co-OrdinatorLTI")
    {
        if (whr == "")
        {
            UserWhr = "where Employee.salapproval='" + us + "'  and Employee.status=0";
            return UserWhr;
        }
        else
        {
            UserWhr = " and Employee.salapproval='" + us + "'  and Employee.status=0 ";
            return UserWhr;
        }
    }
    else if (ur == "Admin" || ur=="HrandAdmin")
    {
        if (whr == "")
        {
            UserWhr = "where  and Employee.status=0";
            return UserWhr;
        }
        else
        {
            UserWhr = "and  Employee.status=0";
            return UserWhr;
        }
    }

    else
    {
        if (whr == "")
        {
            UserWhr = "where Employee.status=0";
            return UserWhr;
        }
        else
        {
            UserWhr = " and Employee.status=0";
            return UserWhr;
        }
    }
  }
  filterrecord() {
   
    this.loading = true;
    this.array = [];

    this.StrWhere = "";
  

    if (this.searchprogram != null && this.searchprogram != "" && this.searchprogram != "undefined" && this.searchprogram != "Select") {

      this.array.push("EmployeeProgram.pgid='" + this.searchprogram + "'");
    }

    if (this.searchdepartment != null && this.searchdepartment != "" && this.searchdepartment != "undefined" && this.searchdepartment != "Select") {
      this.array.push("EmployeeProgram.depid='" + this.searchdepartment + "'");
    }

    if (this.searchmonth != null && this.searchmonth != "" && this.searchmonth != "undefined" && this.searchmonth != "Select") {
      this.array.push("GenSalarySlip.month='" + this.searchmonth + "'");
    }
    if (this.searchyear != null && this.searchyear != "" && this.searchyear != "undefined" && this.searchyear != "Select") {
      this.array.push("GenSalarySlip.year='" + this.searchyear + "'");
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

    console.log(this.where);

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



  onSelectProgram(pgid) {
   
    if (pgid == "")
      this.Departmentlist = null;
    else
    this.service.FillDropDown( "Department", "depname", "depid", "where pgid='" + pgid + "' order by depname").subscribe((data: any) => { this.Departmentlist = data; })


  }

  onSelectdep(depid) {
   
    if (depid == "")
      this.Designationlist = null;
    else
    this.service.FillDropDown( "Designation", "desname", "desid", "where depid='" + depid + "' order by desname").subscribe((data: any) => { this.Designationlist = data; })


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


    if(this.Userrole == "")

    this.addressip();
    this.adduseractivity();
    if (this.Userrole != "R6" && this.Userrole != "R17" && this.Userrole != "R78" ) {
       this.service.FillDropDown("Program", "Program.pgname", "Program.pgid", "INNER JOIN dbo.Organization ON dbo.Program.ogid = dbo.Organization.ogid where Program.pgid='"+   this.pgid +"'").subscribe((data: any) => { this.ProgramList = data; })
    }
    else {
      this.service.FillDropDown("Program", "pgname", "pgid", "where ogid='OG1' order by pgname").subscribe((data: any) => { this.ProgramList = data; })
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
      this.service.EmployeeFavouriteList(this.UserId, this.pgid, this.Userrole,this.favURL,this.favname).subscribe((data: any) => {

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
    fev.url =this.favURL;
    fev.roleid = this.Userrole;
    fev.favname =this.favname;
    console.log(fev)
    this.service.AddEmployeeFavourite(fev).subscribe((res) => {

      this.submited.emit(res.toString());
      console.log(res.toString());
      this.service.EmployeeFavouriteList(this.UserId, this.pgid, this.Userrole,this.favURL,this.favname).subscribe((data: any) => {

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
