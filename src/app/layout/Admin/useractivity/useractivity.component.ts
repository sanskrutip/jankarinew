import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
import { UserActivityList } from 'src/app/ClassFiles/user-activity-list';

@Component({
  selector: 'app-useractivity',
  templateUrl: './useractivity.component.html',
  styleUrls: ['./useractivity.component.scss']
})
export class UseractivityComponent implements OnInit {
  UserActivity:UserActivity[];
  ActivityCount:number;
  strwhr:string;
  UserActivityList:UserActivityList[]
 
   lstwhere:Array<string>;
    array = [];
  StrWhere = "";
  constructor(private service: MasterServiceService, private router: Router) {
    this.service = service;
    service.GetUserActivityList("").subscribe((data: any) => { 
      this.UserActivityList= data;
      console.log( this.UserActivityList);
      })
      this.service.GetUserActivityList("").subscribe((data: any) => {
        
        if (data == "") {

          this.ActivityCount = 0;
        }
        else if (data == null && data[0] == null) {
  
          this.ActivityCount = 0;
        }
        else {
          this.ActivityCount = data[0].tRecordCount;
        }

        console.log(   this.ActivityCount );
      })
   }

  ngOnInit() {
  }

  filterrecord(searchname,searchdate){
    this.array=[];
    var where="";
    this.StrWhere  ="";
    if (searchname != null && searchname != "" && searchname != "undefined" && searchname != "") {
      this.array.push("Employee.firstname%2B' '%2BEmployee.lastname like '%"+ searchname+"%'");
    }
   
    if (searchdate != null && searchdate != "" && searchdate != "undefined"&& searchdate != "dd/mm/yyyy") {
      this.array.push("convert(date,aLogDate) = convert(date,'"+searchdate +"', 111)");
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
                      
console.log(where);

    this.service.GetUserActivityList(where).subscribe((data: any) => {
      this.UserActivityList = data;
    })
    this.service.GetUserActivityList(where).subscribe((data: any) => {
   
      if (data == "") {

        this.ActivityCount = 0;
      }
      else if (data == null && data[0] == null) {

        this.ActivityCount = 0;
      }
      else {
        this.ActivityCount = data[0].tRecordCount;
      }
    })
   

  }
}
