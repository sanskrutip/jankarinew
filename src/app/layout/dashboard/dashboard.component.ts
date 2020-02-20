import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { Router } from '@angular/router';
import { Favorite } from 'src/app/ClassFiles/favorite';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations:[ ]
})
export class DashboardComponent implements OnInit {

    showMyContainer: boolean ;
    closeResult: string;
    current = 0;
    notifycount: number;
    array = [];
    count: number;
    // count1: number;
    pgid;pgname;role;ogid;depid;
    UserId;
    toggle = true;
    Userrole;
    fevoritelist:string;
    finyear
    ngOnInit() {

      this.pgid = localStorage.getItem("pgid");
      this.pgname = localStorage.getItem("pgname");
      this.role = localStorage.getItem("role");
      this.ogid = localStorage.getItem("ogid");
      this.depid = localStorage.getItem("depid");
    
console.log(this.pgid );
console.log(this.pgname );
console.log(this.role );
console.log(this.ogid );
console.log(this.depid );

this.service.GetName("FinanacialYear","yearname","status=0").subscribe((data: any) => {
  this.finyear= data;
})

      this.service.GetEmployeeLeaveList("where EmployeeLeave.status='Pending' and EmployeeProgram.reportto='" + this.UserId + "'").subscribe((data1: any) => {
           
        if (this.count == undefined || this.count == 0||  this.count == null) 
        {
           
            if (data1 == "") {

                this.count = 0;
            }
            else {
                this.count = 1;
            
            }
        }
        else {
            if (data1 == "") {

                this.count = this.count ; 
            }
            else {
                this.count = this.count + 1; 
            }
          
        }
       

        this.notifycount = this.count;

        if(  this.notifycount==0)
        { 
          this.showMyContainer=false;

        }
        else{
          this.showMyContainer=true;
        }
    })

    
    this.service.GetSalAlertList( this.UserId ).subscribe((data1: any) => {
        
      if (this.count == undefined || this.count == 0||  this.count == null) 
      {
         
          if (data1 == "") {

              this.count = 0;
          }
          else {
              this.count = 1;
          
          }
      }
      else {
          if (data1 == "") {

              this.count = this.count ; 
          }
          else {
              this.count = this.count + 1; 
          }
        
      }
     

      this.notifycount = this.count;

      if(  this.notifycount==0)
      { 
        this.showMyContainer=false;

      }
      else{
        this.showMyContainer=true;
      }
  })


    }
    isFavorite(event, newProperty) {
     
      this.toggle = !this.toggle;
    }
    constructor( private modalService: NgbModal,private service: MasterServiceService,private router: Router) {
      this.UserId = localStorage.getItem("UserId");
      this.pgid = localStorage.getItem("pgid");
      this.pgname = localStorage.getItem("pgname");
      this.Userrole = localStorage.getItem("role");
      
      service.EmployeeAllFavouriteList(this.UserId,this.pgid,this.Userrole).subscribe((data:any)=>{
        
        this.fevoritelist=data;
        console.log( this.fevoritelist)
        
    }) 
     }
     public removeSlashes(fevoritelist: string): string {
      
      return fevoritelist.replace(/\//g, "");
  }
    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
        return  `with: ${reason}`;
      }
  
    }
    RedirectFav(url,whr,name)
    {

      localStorage.setItem('Favwhr', whr);
      localStorage.setItem('Favname', name);
     
this.router.navigate([url])
// this.router.navigate("http://localhost:4200",[url]);
// this.router.navigateByUrl("http://localhost:4200",url);

    }

  }
