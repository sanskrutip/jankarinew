
import { Component, OnInit, EventEmitter } from '@angular/core';

import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userlist } from 'src/app/ClassFiles/userlist';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';
import { Orgwisepro } from 'src/app/ClassFiles/orgwisepro';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Departmentlist } from 'src/app/ClassFiles/departmentlist';
import { EmployeeNameList } from 'src/app/ClassFiles/employee-name-list';
import { Userr } from 'src/app/ClassFiles/userr';
import { UserDlist } from 'src/app/ClassFiles/user-dlist';
import { Userrole } from 'src/app/ClassFiles/userrole';
import { Userprolist } from 'src/app/ClassFiles/userprolist';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  public show_dialog: boolean = false;
  public button_name: any = 'Show Login Form!';
  public show: boolean = false;
  public hide: boolean = false;
  public buttonName: any = 'Show';
  UserForm: FormGroup;
  UserDForm: FormGroup;
  Userlist: Userlist[];
  OrgnizationList: OrgnizationList[];
  Orgwisepro: Orgwisepro[];
  ProgramList: ProgramList[];
  Departmentlist: Departmentlist[];
  UserDlist: UserDlist[];
  EmployeeNameList: EmployeeNameList[];
  userEmployeeNameList: EmployeeNameList[];
  userr: Userr[];
  Userrole: Userrole[];
  submited = new EventEmitter<string>();
  countryValue: string;
  countryName: string;
  UserRole: Userrole[];
  Userprolist: Userprolist[];
  model = new Userlist('', '', '', '', '', '', '', '', '', '', '', '');
  model1 = new UserDlist('', '', '');
  closeResult: string;
  constructor(private service: MasterServiceService, private router: Router, private modalService: NgbModal, private fb: FormBuilder, private toastr: ToastrService) {

    this.service = service;
    service.UserRoleList().subscribe((data: any) => {
      this.UserRole = data;
    })
    service.OrganizationList().subscribe((data: any) => { this.OrgnizationList = data; })
   // service.GetProgramlist("").subscribe((data: any) => { this.ProgramList = data; })
    service.FillDropDown("Program","distinct Program.pgname","Program.pgid","where ogid='OG1'").subscribe((data: any) => {
      this.ProgramList = data;

      
    });
    service.FillDropDown("Program","distinct Program.pgname","Program.pgid","inner join Department on Department.pgid=Program.pgid where ogid='OG1'").subscribe((data: any) => {
      this.ProgramList = data;

      
    });
  //  service.GetDepartmentlist("").subscribe((data: any) => { this.Departmentlist = data; })
    //service.GetEmployeeNameList().subscribe((data: any) => { this.EmployeeNameList = data; })
    service.GetUserMasterlist("").subscribe((data: any) => { this.Userlist = data; })

    this.service.DepartmentwiseEmployeeList("dp0").subscribe(
      data => {
        this.userEmployeeNameList = data;
      }
    );


  }

  onSelectOrg(ogid) {
    if (ogid == "")
      this.ProgramList = null;
    else
      // this.service.OrgnazationwiseProgramList(ogid).subscribe(
      //   data => {
      //     this.ProgramList = data;

      //   }
      // );
      this.service.FillDropDown("Program","distinct Program.pgname","Program.pgid","inner join Organization on Program.ogid=Organization.ogid where Organization.ogid='"+ogid+"'").subscribe((data: any) => {
        this.ProgramList = data;
  
        
      });
  }
  onSelectPro(pgid) {

    console.log(pgid);
    if (pgid == "")
      this.Departmentlist = null;
    else
      this.service.ProgramwiseDepartmentList(pgid).subscribe(
        data => {
          this.Departmentlist = data;

        }
      );
  }
  onchangepro(pgid) {

    console.log(pgid);
    if (pgid == "") {
      this.Userrole = null;
      this.Departmentlist = null;
    }
    else {
      this.service.ProgramwiseRoleList(pgid).subscribe(
        data => {
          this.Userrole = data;

        }
      );
      this.service.ProgramwiseDepartmentList(pgid).subscribe(
        data => {
          this.Departmentlist = data;

        }
      );
    }
  }
  onSelectDep(depid) {
    if (depid == "")
      this.EmployeeNameList = null;
    else
      this.service.DepartmentwiseEmployeeList(depid).subscribe(
        data => {
          this.EmployeeNameList = data;
        }
      );
  }
  onchange(selectedValue: string) {
    var empid = document.getElementById("divuserid");
    empid.style.display = "none";

    if (selectedValue !== 'Select') {
      empid.style.display = "block";

    }
    else {
      empid.style.display = "none";
    }
  }
  onSelectEmp(empid) {

    var divuserid = document.getElementById("divuserid");
    var divusername = document.getElementById("divusername");
    console.log("empid" + empid.target.value);
    if (empid.target.value != "" && empid.target.value != null && empid.target.value != 0
      && empid.target.value != "Select" && empid.target.value != undefined
      && empid.target.value != "0: undefined" && empid.target.value != "0: null") {
      this.service.EmployeewiseUsername(empid.target.value).subscribe(
        data => {
          this.userr = data;

        });
      this.countryName = empid.target.options[empid.target.selectedIndex].text;
      this.countryValue = empid.target.value;
      divuserid.style.display = "block";
      divusername.style.display = "block";
    }
    else {
      this.userEmployeeNameList = null;
      divuserid.style.display = "none";
      divusername.style.display = "none";
    }

  }

  AddUser() {

    const user: Userlist = new Userlist();
    user.ogid = this.UserForm.value.ogid;
    user.pgname = this.UserForm.value.pgname;
    user.depname = this.UserForm.value.depname;
    user.empid = this.countryValue;
    user.fullname = this.countryName;
    user.userid = this.UserForm.value.userid;
    user.username = this.UserForm.value.username;

    this.service.InsertUserMaster(user).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      console.log(res.toString());
      this.show_dialog = !this.show_dialog;

      localStorage.setItem('desid', res.toString());
      this.toastr.success("Added SuccessFully");
    },
      error => {
        console.log(error);
      });

  }

  AddUserDetails() {
    const user: UserDlist = new UserDlist();
    user.userid = this.countryValue;
    user.pgid = this.UserDForm.value.pgname;
    user.role = this.UserDForm.value.rolename;
    this.service.InsertUserProgram(user).subscribe((res) => {
      console.log(res);
      this.submited.emit(res.toString());
      console.log(res.toString());
      localStorage.setItem('userid', res.toString());
      console.log(this.countryValue);
      this.service.GetUserProgramDetails(this.countryValue).subscribe((data: any) => {
        this.Userprolist = data;
      })
      console.log(this.Userprolist);
      alert("Added SuccessFully");
    },
      error => {
        console.log(error);
      });
  }
  toggle() {
  }

  DOB() {
    this.hide = !this.hide;
    if (this.hide)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  ngOnInit() {
    var divuserid = document.getElementById("divuserid");
    var divusername = document.getElementById("divusername");
    if (this.countryValue == undefined) {
      divuserid.style.display = "none";
      divusername.style.display = "none";
    }
    else if (this.countryValue != undefined) {
      divuserid.style.display = "block";
      divusername.style.display = "block";
    }
    this.UserForm = this.fb.group({

      ogid: ['', Validators.required],
      pgname: ['', Validators.required],
      depname: ['', Validators.required],
      empname: ['', Validators.required],
      empid: [''],
      username: [''],
      userid: [''],

      // address: [''],
      // phoneno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('[0-9]*')]],

    });

    this.UserDForm = this.fb.group({

      pgname: ['', Validators.required],
      depname: ['', Validators.required],
      ogid: ['', Validators.required],
      upid: [''],
      userid: [''],
      pgid: [''],
      role: [''],
      Program: [''],
      rolename: ['', Validators.required],

    });

  }

  Delete(upid) {
    console.log(upid);
    this.service.RemoveUserProgram(upid).subscribe((res) => {
      this.submited.emit(res.toString());
      alert("Removed SuccessFully");
      this.service.GetUserProgramDetails(this.countryValue).subscribe((data: any) => {
        this.Userprolist = data;
      })
    },
      error => {
        console.log(error);
      }
    );
  }
  open(content) {
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