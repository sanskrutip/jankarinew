import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Userlist } from 'src/app/ClassFiles/userlist';
import { Userprolist } from 'src/app/ClassFiles/userprolist';

@Component({
  selector: 'app-auserdetails',
  templateUrl: './auserdetails.component.html',
  styleUrls: ['./auserdetails.component.scss']
})
export class AuserdetailsComponent implements OnInit {
  Userlist:Userlist[];
  Userprolist:Userprolist[];
  userid:string;
  fullname:string;
  username:string;
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute,private toastr: ToastrService) {
    this.service = service;
    
    this.userid = route.snapshot.params["id"];

    this.service.GetUserMasterlist("where Usermaster.userid='"+  this.userid +"'").subscribe((data:any)=>{

      this.Userlist=data;
      console.log( this.Userlist);
    })
    this.service.GetUserProgramDetails( this.userid ).subscribe((data:any)=>{
      this.Userprolist=data;
      console.log( this.Userprolist);
    })
   }

  ngOnInit() {
  }

}
