import { Component, OnInit } from '@angular/core';
import { CenterService } from 'src/app/shared/services/center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CenterList } from 'src/app/ClassFiles/center-list';
import { State } from 'src/app/ClassFiles/state';
import { City } from 'src/app/ClassFiles/city';
import { Comman } from 'src/app/ClassFiles/comman';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-calnpif',
  templateUrl: './calnpif.component.html',
  styleUrls: ['./calnpif.component.scss']
})
export class CalnpifComponent implements OnInit {

  userid;
  role
  pgid;
  centercount:number;
  array = [];
  StrWhere = "";
  state:State[];
  city:City[];
  centertypelist;
  
  CenterList:CenterList[];
  UserId;
  Userrole;
  Comman4:Comman[];
  CenterId;
  CenterPartner;
  pgname;
  finyear
  constructor(private service: CenterService,private jankariservice: MasterServiceService, private router: Router,private fb: FormBuilder, private route: ActivatedRoute) { 

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
    service.CenterList(this.UserId,this.role,this.pgid,"").subscribe((data: any) => {
      

console.log(this.CenterList);

      this.CenterList= data;})



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
filterrecord(searchname,searchstate,searchcity,searchTL,searchPartner,searchCentertype){
  this.array=[];
  var where="";
  this.StrWhere  ="";
console.log(searchcity);

  if (searchname != null && searchname != "" && searchname != "undefined"&& searchname != "") {
    this.array.push("C.centname like '%" + searchname+"%'");
 }
  if (searchstate != null && searchstate != "" && searchstate != "undefined"&& searchstate != "Select") {

    this.array.push("C.state='" +searchstate+"'");

  }
 
  if (searchcity != null && searchcity != "" && searchcity != "undefined"&& searchcity != "Select") {
    this.array.push("C.city='"+searchcity+"'");
  }
  
  
 
  if (searchTL != null && searchTL != "" && searchTL != "undefined"&& searchTL != "") {
   this.array.push("C.teamleaderid='"+ searchTL+"'");
  }

  if (searchPartner != null && searchPartner != "" && searchPartner != "undefined"&& searchPartner != "Select") {
    this.array.push("CenterPartner.partnerid='"+searchPartner+"'") ;
  }

  if (searchCentertype != null && searchCentertype != "" && searchCentertype != "undefined"&& searchCentertype != "Select") {
    this.array.push("CT.centertype='"+searchCentertype+"'") ;
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
                 this.service.CenterList(this.UserId,this.role,this.pgid,where).subscribe((data: any) => {
      this.CenterList = data;
      console.log("serch list" +   this.CenterList);

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




  pageload()
{
   
  if(this.Userrole=="R5" )
  {
  
    this.jankariservice.FillCenterState(  this.UserId ,  this.role ,this.pgid,"and C.status='0'", "distinct Employee.firstname %2B ' ' %2BEmployee.lastname ", "Employee.empid").subscribe((data:any)=>{this.Comman4=data;})
 
  this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.state=data;})
 
  this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and EmployeeProgram.reportto='"+  this.UserId +"'").subscribe((data:any)=>{this.city=data;})
 
  this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data:any)=>{ this.centertypelist=data;
    
    console.log("abc"+this.centertypelist);
    })
    this.service.FillDropDown("CenterPartner","distinct partnername","CenterPartner.partnerid","inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P1' and CenterPartner.status=0 and Center.status=0 and Center.teamleaderid='"+this.UserId+"'").subscribe((data:any)=>{this.state=data;})
    // this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
    //   this.Comman4=data;
    //  });

}
else if(this.Userrole=="R6" ) {


  this.jankariservice.FillCenterState(  this.UserId ,  this.role ,this.pgid,"and C.status='0'", "distinct Employee.firstname %2B ' ' %2BEmployee.lastname ", "Employee.empid").subscribe((data:any)=>{this.Comman4=data;})
                
  this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.state=data;})
 
  this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.city=data;})
  this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data:any)=>{ this.centertypelist=data;
    
    console.log("abc"+this.centertypelist);
    })

    // this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
    //   this.Comman4=data;
    //  });
    this.service.FillDropDown("CenterPartner","distinct partnername","CenterPartner.partnerid","inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P1' and CenterPartner.status=0 and Center.status=0 ").subscribe((data:any)=>{this.state=data;})
 
}
else {
  this.jankariservice.FillCenterState(  this.UserId ,  this.role ,this.pgid,"and C.status='0'", "distinct Employee.firstname %2B ' '%2BEmployee.lastname ", "Employee.empid").subscribe((data:any)=>{this.Comman4=data;})
        
  this.service.FillDropDown("Employee","distinct Employee.state","Employee.state","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.state=data;})
 
  this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 ").subscribe((data:any)=>{this.city=data;})
  this.service.FillDropDown("centertypemaster", "distinct typename", "typename", " where pgid='CAL-PIF'").subscribe((data:any)=>{ this.centertypelist=data;
    
    console.log("abc"+this.centertypelist);
    })
    this.service.FillDropDown("CenterPartner","distinct partnername","CenterPartner.partnerid","inner join Partner on Partner.partnerid=CenterPartner.partnerid inner join Center on CenterPartner.centid=Center.centid where Center.pgid='P1' and CenterPartner.status=0 and Center.status=0 ").subscribe((data:any)=>{this.CenterPartner=data;})
    // this.service.FillEmpByDepDes("depname='Hardware' and desname in('Team Leader','Manager')").subscribe((data:any)=>{
    //   this.Comman4=data;
    //  });

}
}
onSelectState(stname) {
  console.log(stname);
  if (stname == "")
  this.city = null;
  else
  this.service.FillDropDown("Employee","distinct Employee.city","Employee.city","inner join Employeeprogram on Employeeprogram.empid=Employee.empid where employee.status=0 and Employee.state='"+stname+"'").subscribe((data:any)=>{this.city=data;})
 
  }   

}
