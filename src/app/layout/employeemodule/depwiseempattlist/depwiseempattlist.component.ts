import { Component, OnInit,ElementRef ,ViewChild} from '@angular/core';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DeptEmpAtt } from 'src/app/ClassFiles/dept-emp-att';
import { DeptEmpAttGraph } from 'src/app/ClassFiles/dept-emp-att-graph';
import { Chart } from 'chart.js';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-depwiseempattlist',
  templateUrl: './depwiseempattlist.component.html',
  styleUrls: ['./depwiseempattlist.component.scss']
})
export class DepwiseempattlistComponent implements OnInit {
  

  EmpList: DeptEmpAtt;
  monthname: string;
  year: string;
  depname: string;
  month: string;
  depid: string;
  DeptEmpAttGraph: any;
  DeptEmpAttGraph1: DeptEmpAttGraph[];
  parsedJson: any;

  title = 'app';
  data: DeptEmpAttGraph[];
  empname = [];
  totwhr = [];
  totot = [];
  chart: any;
  dept = [];
  
  UserActivity:UserActivity[];
  model = new UserActivity('','','','','','',);
  ipAddress:string;
   ipadd;
   UserId;
   pgname;
   finyear;
  constructor(private service: MasterServiceService, private router: Router, private route: ActivatedRoute) {
    this.depid=route.snapshot.params["id"];
    this.month = route.snapshot.params["id1"];
    this.year = route.snapshot.params["id2"];
    this.UserId = localStorage.getItem("UserId");
    this.pgname = localStorage.getItem("pgname");


    this.service = service;
    this.service.EmployeeAttDetailsList(this.month, this.year, "where D.depid='" + this.depid + "'  and  ES.month='" + this.month + "' and ES.year='" + this.year + "'")
      .subscribe((data: any) => {
        this.EmpList = data;
      });

      this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
        this.finyear= data;
       
      })
    this.service.EmployeeAttDetailsList(this.month, this.year, "where D.depid='" + this.depid + "'  and  ES.month='" + this.month + "' and ES.year='" + this.year + "'")
      .subscribe((data: any) => {
        var a = data[0];
        this.monthname = a.month1;
        this.year = a.year;
        this.depname = a.depname;
      });


  }

  ngOnInit() {
    this.service.GetEmployeeAttGraph("where D.depid='"+this.depid+"'  and  ES.month='" + this.month + "' and ES.year='" + this.year + "'")
      .subscribe((res: DeptEmpAttGraph[]) => {


        res.forEach(y => {
          this.empname.push(y.empname);
          this.totwhr.push(y.totalwh);
          this.totot.push(y.totalot);


        });
        this.chart = new Chart('canvas', {
          type: 'bar',
          responsive: true,
          data: {
            labels: this.empname,
            datasets: [
              {
                label:'Working Hours',
                data: this.totwhr,
                backgroundColor: "#ffc107",
                borderColor: '#ffc107',
                fill: true,
                
              },
              {
                label:'Overtime',
                data: this.totot,
                backgroundColor: "black",
                borderColor: 'black',
                fill: true
              }
            ],

          },
          options: {

            legend: {
              display: true,
              position: 'bottom',
              legendname: 'afsf',

            },

            scales: {
              xAxes: [{
              
                display: true,
                stacked: true,
                distribution: 'series',
             

              }],
              yAxes: [{
                display: true,
                stacked: true,
                ticks: {
                  beginAtZero: true,
                  //steps:10,
                  stepSize: 50,
                  max: 250
                },
                scaleLabel:{
                    display:true,
                  labelString:"Count",
                
                }


              }],

            }
          }
        });
      });

      this.addressip();
      this.adduseractivity();
  }
  adduseractivity()
  {
    this.ipadd = localStorage.getItem("IP");
  
    const activity: UserActivity = new UserActivity();
    activity.userid = this.UserId ;
    activity.activity = "Visiting Depwiseempattlist";
    activity.pageurl = this.router.url;
    activity.prgid = "";
    activity.userip =   this.ipadd ;
    let date =new Date();
    activity.aLogDate = formatDate(date, 'MM-dd-yyyy hh:mm:ss a', 'en-US', '+0530');
  
    this.service.InsertUserActivity(activity).subscribe((data: any) => {
      console.log(data);
    })
  }
  
  
  addressip()
  {  this.service.getIPAddress().subscribe((res:any)=>{
    this.ipAddress=res.ip;
  localStorage.setItem('IP', res.ip);
  });
  
  
  }
}
