import { Component, OnInit ,Input} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/user';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() bgClass: string;
    public pushRightClass: string;
    UserName: User;
    FullName;
    notifycount: number;
    array = [];
    count: number;
    // count1: number;
    UserId;
    pgname;
    pgid;
    role;
    constructor(private service: MasterServiceService, private translate: TranslateService, public router: Router) {
        this.UserId = localStorage.getItem("UserId");
        this.FullName = localStorage.getItem("FullName");
        this.pgid = localStorage.getItem("pgid");

        this.pgname = localStorage.getItem("pgname");
     this.role = localStorage.getItem("role");
        console.log(        this.role);
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

        this.UserName = JSON.parse(localStorage.getItem('UserName'));
      
    }

    ngOnInit() {

        var admin = document.getElementById("addata");
        if( this.role=="R1"){
            admin.style.display="none";
        }
        
        this.pushRightClass = 'push-right';

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
        })

        this.service.GetSalAlertList( this.UserId ).subscribe((data2: any) => {
        
            if (this.count == undefined || this.count == 0||  this.count == null) 
            {
               
                if (data2 == "") {

                    this.count = 0;
                }
                else {
                    this.count = 1;
                
                }
            }
            else {
                if (data2 == "") {

                    this.count = this.count ; 
                }
                else {
                    this.count = this.count + 1; 
                }
              
            }
           
            this.notifycount = this.count;
            console.log( this.notifycount)

        })

    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        var userId = localStorage.removeItem("UserId");
        this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() =>
            this.router.navigate([""]));
    }
    ClickProfile() {

        this.router.navigate(["/UserProfile"]);
    }
    ClickMyDairy() {

        this.router.navigate(["/DailyWorkList"]);
    }
    ClickMyJankari() {

        this.router.navigate(["/MyJankari"]);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    getRouteName(name: string) {
        return name.replace(" ", "");
    }

    redirect() {
        this.router.navigate(["/Notifications"]);
    }
    home(){
        this.router.navigate(["/home"]);
    }
}