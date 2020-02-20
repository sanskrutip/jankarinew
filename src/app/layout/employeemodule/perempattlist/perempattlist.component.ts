import { Component, OnInit } from '@angular/core';
import { DeptEmpAtt } from 'src/app/ClassFiles/dept-emp-att';
import { EmployeeAttDetailsData } from 'src/app/ClassFiles/employee-att-details-data';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DeptEmpAttGraph } from 'src/app/ClassFiles/dept-emp-att-graph';
import { Chart } from 'chart.js';
import { Piegraph } from 'src/app/ClassFiles/piegraph';
import { symbolCircle } from 'd3-shape';
import {formatDate } from '@angular/common';
import { UserActivity } from 'src/app/ClassFiles/user-activity';
@Component({
  selector: 'app-perempattlist',
  templateUrl: './perempattlist.component.html',
  styleUrls: ['./perempattlist.component.scss']
})
export class PerempattlistComponent implements OnInit {
  year: string;
  empcode: string;
  month: string;
  depid: string;
  DeptEmpAtt: DeptEmpAtt[];

  presentdays: string;
  totworking: string;
  totabsent: string;
  latemark: string;
  halfday: string;
  totalwh: string;
  percentage: number;
  EmployeeAttDetailsData: EmployeeAttDetailsData[];
  UserActivity:UserActivity[];
  model = new UserActivity('','','','','','',);
  ipAddress:string;
   ipadd;
  //pies

  public pieChartData: any[];
  public pieChartLabels: Array<string> = ['Absent', 'OnTime', 'Latemark'];
  public pieChartType: string;
  pietotworking: any;
  pietotabsent: any;
  pielatemark: any;
  piepresentdays: any;
  pieChartColor: any = [
    {
      backgroundColor: ['rgba(236, 52, 19, 1)',
        'rgba(126,218,23,1)',
        'rgba(245,237,56,1)'
      ]
    }
  ]
  public piechartOptions: any = {
    responsive: true,

  };

  //line
  public lineChartType: string;
  public lineChartLegend: boolean = true;
  public lineChartData;
  public linechartLabels: Array<string> = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7', 'Day8', 'Day9', 'Day10', 'Day11', 'Day12', 'Day13', 'Day14', 'Day15', 'Day16', 'Day17', 'Day18', 'Day19', 'Day20', 'Day21', 'Day22', 'Day23', 'Day24', 'Day25', 'Day26', 'Day27', 'Day28', 'Day29', 'Day30', 'Day31'];
  public linechartOptions: any = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: 'rgba(129, 159, 247, 1)',
        boxWidth: 10,
        pointStyle: symbolCircle,
        fontSize: 14
      },
    },
  };
  lineChartColor: any = [
    {
      fill: false,
      borderColor: 'rgba(129, 159, 247, 1)',
      pointBackgroundColor: 'rgba(129, 159, 247, 1)',
      pointBorderColor: 'rgba(129, 159, 247, 1)',
      lineTension: 0,
      pointRadius: 4,
    }
  ]

  //bar
  public barChartData;
  public barChartType: string;
  public barChartLegend: boolean = true;
  public barchartLabels: Array<string> = ['August', 'July', 'June'];
  public barchartOptions: any = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: 'rgba(129, 159, 247, 1)',
      },
    },
  };
  barChartColor: any = [
    {
      fill: true,
      borderColor: 'rgba(129, 159, 247, 1)',
      backgroundColor: ['rgba(129, 159, 247, 1)'],

    }
  ]

  //bar new
  PiegraphData: Piegraph[];
  monthname = [];
  per = [];
  barchart: any;
  dept = [];
  backyear: any;
  y1: number;
  lstmonthlength: number;
  lstbackmonthlength: number;
  UserId;
  pgname;
  finyear
  constructor(private service: MasterServiceService, private router: Router, private fb: FormBuilder, private toastr: ToastrService, private route: ActivatedRoute) {
    this.empcode = route.snapshot.params["id"];
    this.month = route.snapshot.params["id1"];
    this.year = route.snapshot.params["id2"];
    this.depid = route.snapshot.params["id3"];
    this.UserId = localStorage.getItem("UserId");
    this.service = service;
    this.pgname = localStorage.getItem("pgname");

    this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
      this.finyear= data;
     
    })
    
    service.EmployeeAttDetailsList(this.month, this.year, "where E.emp_code=" + this.empcode + " and D.depid='" + this.depid + "' and  ES.month='" + this.month + "' and ES.year='" + this.year + "'").subscribe((data: any) => {
      this.DeptEmpAtt = data;
    })
    service.EmployeeAttDetailsData(this.month, this.year, "where E.emp_code=" + this.empcode + " and D.depid='" + this.depid + "' and  ES.month='" + this.month + "' and ES.year='" + this.year + "'").subscribe((data: any) => { this.EmployeeAttDetailsData = data; })
    this.service.EmployeeAttDetailsList(this.month, this.year, "where E.emp_code=" + this.empcode + " and D.depid='" + this.depid + "' and  ES.month='" + this.month + "' and ES.year='" + this.year + "'").subscribe((data: any) => {
      var b = data[0];

      this.presentdays = b.presentdays;
      this.totworking = b.totworking;
      this.totabsent = b.totabsent;
      this.latemark = b.latemark;
      this.halfday = b.halfday;
      this.totalwh = b.totalwh;
      this.percentage = (b.totalwh * 100) / (b.totworking * 8);

      var attdata = document.getElementById("dvdata");
      if( this.percentage >= 100)
      {
        attdata.style.backgroundColor="#8cd98c";
      }
      else   if( this.percentage >= 70 && this.percentage <= 99.99)
      {
        attdata.style.backgroundColor="#ffff99";
      }
      else{
        attdata.style.backgroundColor="#ff9980";
      }
    })

    this.service.GetEmpAttAllSumPieGraph(this.month, this.year, "where E.emp_code='" + this.empcode + "'  and  D.depid='" + this.depid + "'  and  ES.month='" + this.month + "' and ES.year='" + this.year + "'")
      .subscribe((res: any) => {
        this.pieChartData = [
          (((res[0].totabsent * 100) / res[0].totworking)).toFixed(2)       
        , (((res[0].totpresend * 100) / res[0].totworking)).toFixed(2)
        , (((res[0].totlate * 100) / res[0].totworking)).toFixed(2)];
      })
    this.service.GetEmpAttAllSumlineGraph(this.month, this.year, "where E.emp_code='" + this.empcode + "'  and  D.depid='" + this.depid + "'  and  ES.month='" + this.month + "' and ES.year='" + this.year + "'")
      .subscribe((res: any) => {
        this.lineChartData = [{ data: [res[0].Day1, res[0].Day2, res[0].Day3, res[0].Day4, res[0].Day5, res[0].Day6, res[0].Day7, res[0].Day8, res[0].Day9, res[0].Day10, res[0].Day11, res[0].Day12, res[0].Day13, res[0].Day14, res[0].Day15, res[0].Day16, res[0].Day17, res[0].Day18, res[0].Day19, res[0].Day20, res[0].Day21, res[0].Day22, res[0].Day23, res[0].Day24, res[0].Day25, res[0].Day26, res[0].Day27, res[0].Day28, res[0].Day29, res[0].Day30, res[0].Day31], label: 'Hours' }]
      })

        
    
       
    }
    
  

  ngOnInit() {
    this.pieChartType = 'pie';
    this.lineChartType = 'line';
    this.barChartType = 'bar';


    this.service.GetEmpAttAllSumbarGraph(this.empcode, this.month, this.year)
    .subscribe((result: any) => {

      if(this.month=='1')
      {
        this.backyear = Number(this.year) - 1;
        this.service.GetEmpAttAllSumbarGraph(this.empcode, this.month, this.backyear)
        .subscribe((bkyear: any) => {
          if (this.month == '1') {
          if (bkyear.length != 0) {
            // console.log(result);
            // console.log(bkyear);
            result.forEach(x =>
           
              {   
              [
                this.per.push(x.January),
                this.monthname.push('January'),
              ];
            });
            bkyear.forEach(y => {
              [
                
                this.per.push(y.December),
                this.monthname.push('December'),
                this.per.push(y.November),
                this.monthname.push('November'),
    
              ];
            
            });

            console.log( this.per +" this.per");
            console.log( this.monthname +" this.monthname");

            this.barchart = new Chart('canvas', {
              type: 'bar',
              data: {
                labels: this.monthname,
                datasets: [
                  {
                    data: this.per,
                    borderColor: '#819FF7',
                    backgroundColor:
                      "#819FF7"  ,
                    fill: true
                  }
                ]
              },
              options: {
                legend: {
                  display: false
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
                      stepSize: 25,
                      max: 125
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Count",
                    }
                  }],
                }
              }
            });


          }

else{
  result.forEach(x =>
           
    {   
    [
      this.per.push(x.January),
      this.monthname.push('January'),
    ];
  });
  this.barchart = new Chart('canvas', {
    type: 'bar',
    data: {
      labels: this.monthname,
      datasets: [
        {
          data: this.per,
          borderColor: '#819FF7',
          backgroundColor:
            "#819FF7"  ,
          fill: true
        }
      ]
    },
    options: {
      legend: {
        display: false
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
            stepSize: 25,
            max: 125
          },
          scaleLabel: {
            display: true,
            labelString: "Count",
          }
        }],
      }
    }
  });

}

        }
        });

      }
      else if (this.month == '2') {

        this.backyear = Number(this.year) - 1;
        this.service.GetEmpAttAllSumbarGraph(this.empcode, this.month, this.backyear)
        .subscribe((bkyear: any) => {
          if (this.month == '2') {
          if (bkyear.length != 0) {
            // console.log(result);
            // console.log(bkyear);
            result.forEach(x =>
           
              {   
              [
                this.per.push(x.February),
                this.monthname.push('February'),
                this.per.push(x.January),
                this.monthname.push('January'),
              ];
            });
            bkyear.forEach(y => {
              [
                
                this.per.push(y.December),
                this.monthname.push('December'),
    
              ];
            
            });

            console.log( this.per +" this.per");
            console.log( this.monthname +" this.monthname");

            this.barchart = new Chart('canvas', {
              type: 'bar',
              data: {
                labels: this.monthname,
                datasets: [
                  {
                    data: this.per,
                    borderColor: '#819FF7',
                    backgroundColor:
                      "#819FF7"  ,
                    fill: true
                  }
                ]
              },
              options: {
                legend: {
                  display: false
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
                      stepSize: 25,
                      max: 125
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Count",
                    }
                  }],
                }
              }
            });


          }
else{

  result.forEach(x =>
           
    {   
    [
      this.per.push(x.February),
      this.monthname.push('February'),
      this.per.push(x.January),
      this.monthname.push('January'),
    ];
  });
  this.barchart = new Chart('canvas', {
    type: 'bar',
    data: {
      labels: this.monthname,
      datasets: [
        {
          data: this.per,
          borderColor: '#819FF7',
          backgroundColor:
            "#819FF7"  ,
          fill: true
        }
      ]
    },
    options: {
      legend: {
        display: false
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
            stepSize: 25,
            max: 125
          },
          scaleLabel: {
            display: true,
            labelString: "Count",
          }
        }],
      }
    }
  });

}

        }
        });

      }
      else if (this.month == '3') {
        result.forEach(x => {
          [this.per.push(x.March),
          this.monthname.push('March'),
          this.per.push(x.February),
          this.monthname.push('February'),
          this.per.push(x.January),
          this.monthname.push('January'),
          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });

      }
      else if (this.month == '4') {
        result.forEach(x => {
          [
            this.per.push(x.April),
            this.monthname.push('April'),
            this.per.push(x.March),
            this.monthname.push('March'),
            this.per.push(x.February),
            this.monthname.push('February'),

          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });

      }
      else if (this.month == '5') {
        result.forEach(x => {
          [
            this.per.push(x.May),
            this.monthname.push('May'),
            this.per.push(x.April),
            this.monthname.push('April'),
            this.per.push(x.March),
            this.monthname.push('March'),
          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });

      }
      else if (this.month == '6') {
        result.forEach(x => {
          [
            this.per.push(x.June),
            this.monthname.push('June'),
            this.per.push(x.May),
            this.monthname.push('May'),
            this.per.push(x.April),
            this.monthname.push('April'),
          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });

      }
      else if (this.month == '7') {
        result.forEach(x => {
          [
            this.per.push(x.July),
            this.monthname.push('July'),
            this.per.push(x.June),
            this.monthname.push('June'),
            this.per.push(x.May),
            this.monthname.push('May'),
          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });

      }
      else if (this.month == '8') {
        result.forEach(x => {
          [
            this.per.push(x.August),
            this.monthname.push('August'),
            this.per.push(x.July),
            this.monthname.push('July'),
            this.per.push(x.June),
            this.monthname.push('June'),

          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });


      }
      else if (this.month == '9') {
        result.forEach(x => {
          [
            this.per.push(x.September),
            this.monthname.push('September'),
            this.per.push(x.August),
            this.monthname.push('August'),
            this.per.push(x.July),
            this.monthname.push('July'),

          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });

      }
      else if (this.month == '10') {
        result.forEach(x => {
          [
            this.per.push(x.October),
            this.monthname.push('October'),
            this.per.push(x.September),
            this.monthname.push('September'),
            this.per.push(x.August),
            this.monthname.push('August'),

          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });

      }
      else if (this.month == '11') {
        result.forEach(x => {
          [
            this.per.push(x.November),
            this.monthname.push('November'),
            this.per.push(x.October),
            this.monthname.push('October'),
            this.per.push(x.September),
            this.monthname.push('September'),
          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });

      }
      else if (this.month == '12') {
        result.forEach(x => {
          [
            this.per.push(x.December),
            this.monthname.push('December'),
            this.per.push(x.November),
            this.monthname.push('November'),
            this.per.push(x.October),
            this.monthname.push('October'),
          ];
        });
        this.barchart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: this.monthname,
            datasets: [
              {
                data: this.per,
                borderColor: '#819FF7',
                backgroundColor:
                  "#819FF7"  ,
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
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
                  stepSize: 25,
                  max: 125
                },
                scaleLabel: {
                  display: true,
                  labelString: "Count",
                }
              }],
            }
          }
        });

      }





    });
    this.addressip();
this.adduseractivity();
  }
  adduseractivity()
{
  this.ipadd = localStorage.getItem("IP");

  const activity: UserActivity = new UserActivity();
  activity.userid = this.UserId ;
  activity.activity = "Visiting  Perempattlist";
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
