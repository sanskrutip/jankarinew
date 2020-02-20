import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrgnizationList } from 'src/app/ClassFiles/orgnization-list';
import { ProgramList } from 'src/app/ClassFiles/program-list';
import { Userlist } from 'src/app/ClassFiles/userlist';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  OrgnizationList:OrgnizationList[];
  ProgramList:ProgramList[];
  Userlist:Userlist[];
  array = [];
  StrWhere = "";
  usercount:number;
  constructor(private service: MasterServiceService, private router: Router,private fb: FormBuilder) { 
    this.service = service;
    service.OrganizationList().subscribe((data: any) => { this.OrgnizationList= data;})
   
    service.FillDropDown("Program","distinct Program.pgname","Program.pgid","where ogid='OG1'").subscribe((data: any) => {
      this.ProgramList = data;

      
    });
    service.GetUserMasterlist("").subscribe((data: any) => { this.Userlist= data;
    
    console.log( this.Userlist);

    })
    this.service.GetUserMasterlist("").subscribe((data: any) => {
        
      if (data == "") {

        this.usercount = 0;
      }
      else if (data == null && data[0] == null) {

        this.usercount = 0;
      }
      else {
        this.usercount = data[0].tRecordCount;
      }

      console.log(   this.usercount );
    })
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
  this.service.GetUserMasterlist(where).subscribe((data: any) => {
    this.Userlist = data;
  })
  this.service.GetUserMasterlist(where).subscribe((data: any) => {
        
    if (data == "") {

      this.usercount = 0;
    }
    else if (data == null && data[0] == null) {

      this.usercount = 0;
    }
    else {
      this.usercount = data[0].tRecordCount;
    }

    console.log(   this.usercount );
  })
}
  ngOnInit() {
  }

}
