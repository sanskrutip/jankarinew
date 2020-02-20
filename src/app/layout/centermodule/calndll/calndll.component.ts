import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Userlist } from 'src/app/ClassFiles/userlist';
import { CenterService } from 'src/app/shared/services/center.service';
import { CenterList } from 'src/app/ClassFiles/center-list';

@Component({
  selector: 'app-calndll',
  templateUrl: './calndll.component.html',
  styleUrls: ['./calndll.component.scss']
})
export class CalndllComponent implements OnInit {
  userid;
  role
  pgid;
  array = [];
  StrWhere = "";
  usercount:number;
  CenterList:CenterList[];
  UserId;
  Userrole;
  constructor(private service: CenterService, private router: Router,private fb: FormBuilder) { 
    this.userid = localStorage.getItem("userid");
    this.role = localStorage.getItem("role");
    this.pgid = localStorage.getItem("pgid");
    this.UserId = localStorage.getItem("UserId");
  this.Userrole = localStorage.getItem("role");


    this.service = service;
    service.CenterList(this.UserId,this.Userrole,'P1',"where c.pgid='"+this.pgid+"'").subscribe((data: any) => { this.CenterList= data;})
 

 

  }
filterrecord(searchorg,searchpro,searchname,searchuser,searchstatus){
  this.array=[];
  var where="";
  this.StrWhere  ="";
  if (searchorg != null && searchorg != "" && searchorg != "undefined"&& searchorg != "Select") {

    this.array.push("Usermaster.ogid='"+searchorg+"'");

  }
 
  if (searchpro != null && searchpro != "" && searchpro != "undefined"&& searchpro != "Select") {
    this.array.push("Userprogram.pgid='"+searchpro+"'");
  }
  
  if (searchname != null && searchname != "" && searchname != "undefined"&& searchname != "") {
     this.array.push("Usermaster.fullname like '%"+ searchname+"%'");

  }
 
  if (searchuser != null && searchuser != "" && searchuser != "undefined"&& searchuser != "") {
   this.array.push("Usermaster.username like '%"+ searchuser+"%'");
  }

  if (searchstatus != null && searchstatus != "" && searchstatus != "undefined"&& searchstatus != "Select") {
    this.array.push("Usermaster.status='"+searchstatus+"'") ;
  }
 if(this.array.length==0)
 {
  where= this.StrWhere;
 }
 else if (this.array.length == 1)
         {
          this.StrWhere  =   " where " + this.array[0].toString();
        }
        else
                 {
                  this.StrWhere  = " where " + this.array[0].toString();
                  for (let i = 1; i <  this.array.length; i++)
                     {
                      this.StrWhere  =   this.StrWhere  + " and " + this.array[i].toString();
                     }   
                 }
                 where=  this.StrWhere;


}
  ngOnInit() {
  }


}
