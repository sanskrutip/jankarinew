import { Component, OnInit, EventEmitter } from '@angular/core';
import { Addcenter } from 'src/app/ClassFiles/addcenter';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { State } from 'src/app/ClassFiles/state';
import { Distirct } from 'src/app/ClassFiles/distirct';
import { City } from 'src/app/ClassFiles/city';
import { Office } from 'src/app/ClassFiles/office';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { CenterService } from 'src/app/shared/services/center.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CenterList } from 'src/app/ClassFiles/center-list';
import { Comman } from 'src/app/ClassFiles/comman';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-idi-centerlist',
  templateUrl: './idi-centerlist.component.html',
  styleUrls: ['./idi-centerlist.component.scss']
})
export class IdiCenterlistComponent implements OnInit {

  userid;
  role
  pgid;
  array = [];
  StrWhere = "";
  state: State[];
  city: City[];
  CC;
  centertypelist;
  usercount: number;
  CenterList: CenterList[];
  UserId;
  Userrole;
  Comman4: Comman[];
  CenterId;
  CenterPartner;
  teamleader;
  fellow;
  Partner;
  centercount;
  pgname;
  finyear;

  constructor(private service: CenterService, private jankariservice: MasterServiceService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {

    this.role = localStorage.getItem("role");
    this.pgid = localStorage.getItem("pgid");
    this.UserId = localStorage.getItem("UserId");
    this.CenterId = route.snapshot.params["id"];
    this.pgname = localStorage.getItem("pgname");


    this.jankariservice.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    console.log(this.pgid);

    this.service = service;
    service.CenterList(this.UserId, this.role, this.pgid, "").subscribe((data: any) => {


      console.log(this.CenterList);

      this.CenterList = data;
    })


    this.service.CenterList(this.UserId,this.role,this.pgid,"").subscribe((data: any) => {
        
      if (data == "") {

        this.centercount = 0;
      }
      else if (data == null && data[0] == null) {

        this.centercount = 0;
      }
      else {
        this.centercount = data[0].tRecordCount;
      }

      console.log(   this.centercount );
    })

    this.pageload();

  }
  filterrecord(searchname, searchstate, searchcity, searchTL, searchPartner, searchCentertype) {
    this.array = [];
    var where = "";
    this.StrWhere = "";
    console.log(searchcity);

    if (searchname != null && searchname != "" && searchname != "undefined" && searchname != "") {
      this.array.push("C.centname like '%" + searchname + "%'");
    }
    if (searchstate != null && searchstate != "" && searchstate != "undefined" && searchstate != "Select") {

      this.array.push("C.state='" + searchstate + "'");

    }

    if (searchcity != null && searchcity != "" && searchcity != "undefined" && searchcity != "Select") {
      this.array.push("C.city='" + searchcity + "'");
    }



    if (searchTL != null && searchTL != "" && searchTL != "undefined" && searchTL != "") {
      this.array.push("C.teamleaderid='" + searchTL + "'");
    }

    if (searchPartner != null && searchPartner != "" && searchPartner != "undefined" && searchPartner != "Select") {
      this.array.push("CenterPartner.partnerid='" + searchPartner + "'");
    }

    if (searchCentertype != null && searchCentertype != "" && searchCentertype != "undefined" && searchCentertype != "Select") {
      this.array.push("CT.centertype='" + searchCentertype + "'");
    }

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
    console.log(where);
    this.service.CenterList(this.UserId, this.role, this.pgid, where).subscribe((data: any) => {
      this.CenterList = data;
      console.log("serch list" + this.CenterList);

    })


    
    this.service.CenterList(this.UserId,this.role,this.pgid,where).subscribe((data: any) => {
   
      if (data == "") {

        this.centercount = 0;
      }
      else if (data == null && data[0] == null) {

        this.centercount = 0;
      }
      else {
        this.centercount = data[0].tRecordCount;
      }
    })


  }
  ngOnInit() {
  }




  pageload() {

    if (this.pgid == "P1") {


      if (this.Userrole == "R5") {

        this.jankariservice.FillCenterState(this.UserId, this.role, this.pgid, "and C.status='0'", "distinct Employee.firstname %2B ' ' %2BEmployee.lastname ", "Employee.empid").subscribe((data: any) => { this.Comman4 = data; })

        this.service.FillDropDown("Employee", "distinct Employee.state", "Employee.state", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "'").subscribe((data: any) => { this.state = data; })

        this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='" + this.UserId + "'").subscribe((data: any) => { this.city = data; })

        this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data: any) => {
        this.centertypelist = data;

          console.log("abc" + this.centertypelist);
        })
        this.service.FillDropDown("CenterPartner", "distinct partnername", "CenterPartner.partnerid", "inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P1' and CenterPartner.status=0 and Center.status=0 and Center.teamleaderid='" + this.UserId + "'").subscribe((data: any) => { this.CenterPartner = data; })


      }
      else if (this.Userrole == "R6") {


        this.jankariservice.FillCenterState(this.UserId, this.role, this.pgid, "and C.status='0'", "distinct Employee.firstname %2B ' ' %2BEmployee.lastname ", "Employee.empid").subscribe((data: any) => { this.Comman4 = data; })

        this.service.FillDropDown("Employee", "distinct Employee.state", "Employee.state", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data: any) => { this.state = data; })

        this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data: any) => { this.city = data; })
        this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data: any) => {
        this.centertypelist = data;

          console.log("abc" + this.centertypelist);
        })

      
        this.service.FillDropDown("CenterPartner", "distinct partnername", "CenterPartner.partnerid", "inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P1' and CenterPartner.status=0 and Center.status=0 ").subscribe((data: any) => { this.CenterPartner = data; })

      }
      else {
        this.jankariservice.FillCenterState(this.UserId, this.role, this.pgid, "and C.status='0'", "distinct Employee.firstname %2B ' '%2BEmployee.lastname ", "Employee.empid").subscribe((data: any) => { this.Comman4 = data; })

        this.service.FillDropDown("Employee", "distinct Employee.state", "Employee.state", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data: any) => { this.state = data; })

        this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data: any) => { this.city = data; })
        this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data: any) => {
        this.centertypelist = data;

          console.log("abc" + this.centertypelist);
        })
        this.service.FillDropDown("CenterPartner", "distinct partnername", "CenterPartner.partnerid", "inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P1' and CenterPartner.status=0 and Center.status=0 ").subscribe((data: any) => { this.CenterPartner = data; })
        

      }
    }
    else if (this.pgid == "P6") {
      if (this.Userrole == "R9" || this.Userrole == "R49") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, "and C.teamleaderid='" + this.UserId + "'", "distinct  C.state", "C.state").subscribe((data: any) => { this.state = data; })
        this.service.FillDropDown("Center", "distinct Employee.firstname %2B ' ' %2B Employee.lastname", "Center.teamleaderid", "inner join Employee on Employee.empid=Center.teamleaderid where Center.teamleaderid='" + this.UserId + "' AND Center.pgid='P6' and Center.status='0' and Employee.status='0'").subscribe((data: any) => { this.CC = data; })
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, "", "distinct C.city", "C.city").subscribe((data: any) => { this.city = data; })
        this.service.FillDropDown("Employee", "distinct employee.firstname %2B' '%2B Employee.lastname", "Employee.empid", "inner join center on center.iditeamleaderid=Employee.empid where center.status=0 and employee.status=0 and center.pgid='p6' and Center.teamleaderid='" + this.UserId + "'order by employee.firstname+' '+Employee.lastname").subscribe((data: any) => { this.fellow = data; })
        this.service.FillDropDown("CenterPartner", "distinct partnername", "CenterPartner.partnerid", "inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P6' and CenterPartner.status=0 and Center.status=0 and Center.teamleaderid='" + this.UserId + "' ").subscribe((data: any) => { this.CenterPartner = data; })




      }

      else if (this.Userrole == "R59") {
        this.service.FillDropDown("center", "distinct state", "state", " where teamleaderid='" + this.UserId + "' and  status=0 and pgid='p6' order by state").subscribe((data: any) => { this.state = data; })
        this.service.FillDropDown("center", "distinct city", "city", " where teamleaderid='" + this.UserId + "' and  status=0 and pgid='p6' order by city").subscribe((data: any) => { this.city = data; })
        this.service.FillDropDown("Center", "distinct Employee.firstname %2B ' ' %2B Employee.lastname", "Center.teamleaderid", "inner join Employee on Employee.empid=Center.teamleaderid where Center.teamleaderid='" + this.UserId + "' AND Center.pgid='P6' and Center.status='0' and Employee.status='0'").subscribe((data: any) => { this.CC = data; })
        this.service.FillDropDown("Employee", "distinct employee.firstname %2B' '%2B Employee.lastname", "Employee.empid", "inner join center on center.iditeamleaderid=Employee.empid where center.status=0 and employee.status=0 and center.pgid='p6' and Center.teamleaderid='" + this.UserId + "'order by employee.firstname+' '+Employee.lastname").subscribe((data: any) => { this.fellow = data; })
        this.service.FillDropDown("CenterPartner", "distinct partnername", "CenterPartner.partnerid", "inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P6' and CenterPartner.status=0 and Center.status=0 and Center.teamleaderid='" + this.UserId + "' ").subscribe((data: any) => { this.CenterPartner = data; })




      }

      else if (this.Userrole == "R43") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.iditeamleaderid='" + this.UserId + "'", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })
        this.service.FillDropDown("Center", "distinct Employee.firstname %2B ' ' %2B Employee.lastname", "Center.teamleaderid", "inner join Employee on Employee.empid=Center.teamleaderid where Center.iditeamleaderid='" + this.UserId + "' AND Center.pgid='P6' and Center.status='0' and Employee.status='0'").subscribe((data: any) => { this.CC  = data; })
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, "", "distinct C.city", "C.city").subscribe((data: any) => { this.city = data; })
        this.service.FillDropDown("Center", "distinct Employee.firstname %2B ' ' %2B Employee.lastname", "Center.iditeamleaderid", "inner join Employee on Employee.empid=Center.iditeamleaderid  where Center.teamleaderid='" + this.UserId + "' AND Center.pgid='P6' and Center.status='0' and Employee.status='0'").subscribe((data: any) => { this.fellow = data; })



      }

      else if (this.Userrole == "R35") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.iditeamleaderid='" + this.UserId + "'", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })
        this.service.FillDropDown("Center", "distinct Employee.firstname + ' ' +Employee.lastname", "Center.teamleaderid", "inner join Employee on Employee.empid=Center.teamleaderid where Center.iditeamleaderid='" + this.UserId + "' AND Center.pgid='P6' and Center.status='0' and Employee.status='0'").subscribe((data: any) => { this.CC = data; })
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, "", "distinct C.city", "C.city").subscribe((data: any) => { this.city = data; })
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.status='0' and Employee.status='0' and C.iditeamleaderid='" + this.UserId + "' order by Employee.firstname ", "Employee.firstname + ' ' +Employee.lastname ", "Employee.empid").subscribe((data: any) => { this.fellow = data; })


      }

      else if (this.Userrole == "R28") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.ohid='" + this.UserId + "'", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })

      }

      else if (this.Userrole == "R20" || this.Userrole == "R48") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.pcid='" + this.UserId + "'", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.pcid='" + this.UserId + "'", "distinct C.city", "C.city").subscribe((data: any) => { this.city = data; })
        this.service.FillDropDown("Center", "distinct Employee.firstname + ' ' +Employee.lastname", "Center.teamleaderid", "inner join Employee on Employee.empid=Center.teamleaderid where Center.pcid='" + this.UserId + "' AND Center.pgid='P6' and Center.status='0' and Employee.status='0'").subscribe((data: any) => { this.CC = data; })
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.status='0' and Employee.status='0' and C.pcid='" + this.UserId + "' order by Employee.firstname ", "Employee.firstname + ' ' +Employee.lastname ", "Employee.empid").subscribe((data: any) => { this.fellow = data; })
        this.service.FillDropDown("CenterPartner", "distinct partnername", "CenterPartner.partnerid", "inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P6' and CenterPartner.status=0 and Center.status=0 and Center.pcid='" + this.UserId + "' ").subscribe((data: any) => { this.CenterPartner = data; })

      }

      else if (this.Userrole == "R60") {
        this.service.FillDropDown("Center", "distinct state", "state", "inner join CenterPartner on CenterPartner.centid=Center.centid where CenterPartner.partnerid in ('PT22','PT39') and CenterPartner.status=0 and center.status=0").subscribe((data: any) => { this.state = data; })
        this.service.FillDropDown("Center","distinct city", "city", "inner join CenterPartner on CenterPartner.centid=Center.centid where partnerid in ('PT22','PT39') and CenterPartner.status=0 and center.status=0").subscribe((data: any) => { this.city = data; })
        this.service.FillDropDown("Center","distinct Employee.firstname %2B ' ' %2B Employee.lastname", "employee.empid", "inner join CenterPartner on CenterPartner.centid=Center.centid inner join Employee on Employee.empid=Center.iditeamleaderid where CenterPartner.partnerid in ('PT22','PT39') and CenterPartner.status=0 and center.status=0 and Employee.status=0").subscribe((data: any) => { this.fellow = data; })
        this.service.FillDropDown("Center","distinct Employee.firstname + ' ' +Employee.lastname", "employee.empid", "inner join CenterPartner on CenterPartner.centid=Center.centid inner join Employee on Employee.empid=Center.teamleaderid where CenterPartner.partnerid in ('PT22','PT39') and CenterPartner.status=0 and center.status=0  and Employee.status=0").subscribe((data: any) => { this.CC = data; })
        this.service.FillDropDown("CenterPartner", "distinct partnername", "CenterPartner.partnerid", "inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P6' and CenterPartner.status=0 and Center.status=0 and partnerid in ('PT22','PT39') ").subscribe((data: any) => { this.CenterPartner = data; })

      }

      else if (this.Userrole == "R46") {
        this.service.FillDropDown("Center",  "distinct state", "state", " where  Center.progassociate='" + this.UserId + "' and center.status=0").subscribe((data: any) => { this.state = data; })
        this.service.FillDropDown("Center","distinct city", "city", " where Center.progassociate='" + this.UserId + "' and center.status=0").subscribe((data: any) => { this.city = data; })
        this.service.FillDropDown("Center","distinct Employee.firstname + ' ' +Employee.lastname", "employee.empid", "inner join Employee on Employee.empid=Center.iditeamleaderid where Center.progassociate='" + this.UserId + "' and center.status=0 and Employee.status=0").subscribe((data: any) => { this.fellow = data; })
        this.service.FillDropDown("Center", "distinct Employee.firstname + ' ' +Employee.lastname", "employee.empid", "inner join Employee on Employee.empid=Center.teamleaderid where Center.progassociate='" + this.UserId + "' and center.status=0  and Employee.status=0").subscribe((data: any) => { this.CC = data; })
        this.service.FillDropDown("CenterPartner","distinct partnername", "CenterPartner.partnerid", "inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P6' and CenterPartner.status=0 and Center.status=0 and Center.progassociate='" + this.UserId + "' ").subscribe((data: any) => { this.CenterPartner = data; })

      }
      else if (this.Userrole == "R32") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.placcoordinatorid='" + this.UserId + "'", "distinct  C.state", " C.state").subscribe((data: any) => { this.state  = data; })

      }
      else if (this.Userrole == "R23") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid," and C.dcid='" + this.UserId + "'", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })

      }
      else if (this.Userrole == "R53") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.engid='" + this.UserId + "'", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })

      }

      else if (this.Userrole == "R25") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid,  " and C.eteamleaderid='" + this.UserId + "'", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })

      }
      
      else if (this.Userrole == "R24") {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid,  "", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })

      }

      else if (this.Userrole == "R44" || this.Userrole == "R43" ) {
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid,  "", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })

      }

      else{

        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, "", "distinct  C.state", " C.state").subscribe((data: any) => { this.state = data; })
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, " and C.status='0' and Employee.status='0'", "distinct Employee.firstname %2B ' ' %2B Employee.lastname ", "Employee.empid").subscribe((data: any) => { this.fellow = data; })
        this.jankariservice.FillCenterState(this.UserId, this.role, this.pgid, " and C.status='0'", "distinct Employee.firstname %2B ' ' %2B Employee.lastname ", "Employee.empid").subscribe((data: any) => { this.CC = data; })
        this.jankariservice.FillCenterCityIDI(this.UserId, this.role, this.pgid, "", "distinct  C.city", " C.city").subscribe((data: any) => { this.city = data; })
        this.jankariservice.FillDropDown("CenterPartner","distinct partnername", "CenterPartner.partnerid", "inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P6' and CenterPartner.status=0 and Center.status=0 ").subscribe((data: any) => { this.Partner = data; })


      }

    }


  }
  onSelectState(stname) {
    console.log(stname);
    if (stname == "")
      this.city = null;
    else
      this.service.FillDropDown("Employee", "distinct Employee.city", "Employee.city", "inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and Employee.state='" + stname + "'").subscribe((data: any) => { this.city = data; })

  }

}
