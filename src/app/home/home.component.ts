

import { Component, OnInit, EventEmitter, ViewChild, ElementRef, HostListener, AfterViewInit, Output ,ViewChildren} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../user';
import { MasterServiceService } from '../shared/services/master-service.service';
import { Summary } from '../ClassFiles/summary';
import { ToastrService } from 'ngx-toastr';
import { Menu } from '../menu';
import { Birthday } from '../ClassFiles/birthday';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pushRightClass: string;
  UserName: User;
  FullName;
  notifycount: number;
  array = [];
  count: number;
  UserId;
  summary: Summary[];
  birthday;
  birthdayphoto: Birthday;
  birthdaycount;
  private centcount = 0;
  private schoolcount = 0;
  private enrollcount = 0;
  private sum = 0;
  private value;
  photo;
  empphoto;
  program;
  submited = new EventEmitter<string>();
 
  EmployeeRole;
  pgid;

  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  userId;
  
  @ViewChildren('tooltip') tooltips;
  tooltipStatus;
  
  @Output() collapsedEvent = new EventEmitter<boolean>();
  constructor(private service: MasterServiceService, private toastr: ToastrService, private translate: TranslateService, public router: Router) {
    this.userId = localStorage.getItem("UserId");
    this.FullName = localStorage.getItem("FullName");
    this.pgid = localStorage.getItem("pgid");

    console.log("abc"+ this.pgid )
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


    service.HomeSummary().subscribe((data: any) => {
      this.summary = data;
      this.value = this.summary
      for (let j = 0; j < this.summary.length; j++) {
        this.centcount += this.value[j].centers
        this.schoolcount += this.value[j].schools
        this.enrollcount += this.value[j].enrolments
      }
    })

    service.BirthdayNotification().subscribe((data: any) => {
      this.birthday = data;
      console.log(this.birthday)

      var birthdaydiv = document.getElementById("dvdata1");
      var nobirthdaydiv = document.getElementById("dvdata2");

      if (this.birthday.length == 0 && this.birthday.length == null && this.birthday.length == undefined) {
        birthdaydiv.style.display = "none";
        nobirthdaydiv.style.display = "block";
      }

      if (this.birthday.length != 0 && this.birthday.length != null) {
        nobirthdaydiv.style.display = "none";
        birthdaydiv.style.display = "block";
      }
      this.birthday = data;
      for (let j = 0; j < data.length; j++) {
        console.log(this.birthday[j].empid + "-" + this.birthday[j].empphoto)
        if (this.birthday[j].empphoto == undefined || this.birthday[j].empphoto == null || this.birthday[j].empphoto == "/Image/") {
          if (this.birthday[j].gender == "Male") 
          { 
            this.birthday[j].empphoto = "https://www.w3schools.com/howto/img_avatar.png"; 
          }
          else {
          this.birthday[j].empphoto = "https://www.w3schools.com/howto/img_avatar2.png";

          }

        }
        else {
          console.log("false");
          this.birthday[j].empphoto = "http://localhost:24214" + this.birthday[j].empphoto;
          console.log("false" + this.birthday.empphoto);
        }
      }


    })

    


    this.service.GetUserProgramLoginList("where UserMaster.userid='" + this.userId + "'").subscribe(
      (data: any) => {
        this.program = data;

        console.log(this.program );

      }
    );


    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }
  // past_events = this.birthday.filter(event => event.eventEndingDate < new Date());
  ngOnInit() {}

  dashboard(p, pg) {
   console.log(p);
   console.log(pg); 
    // localStorage.setItem('pgid', pgid);
    // localStorage.setItem('pgname', pgname);
    this.service.GetProgramWiseEmployeeRole(p,this.userId).subscribe((data:any)=>{
      this.EmployeeRole= data;
      console.log( this.EmployeeRole)
      // localStorage.setItem('pgid', this.EmployeeRole.pgid);
      localStorage.setItem('pgid', this.EmployeeRole.pgid);
    localStorage.setItem('pgname', this.EmployeeRole.pgname);
    localStorage.setItem('role', this.EmployeeRole.role);
    localStorage.setItem('ogid', this.EmployeeRole.ogid);
    localStorage.setItem('depid', this.EmployeeRole.depid);
        
    this.router.navigate(["/Dashboard"]);
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

  ClickMyDairy() {

    this.router.navigate(["/DailyWorkList"]);
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


  Greeting(empid) {
    console.log(empid);
    this.service.SendBirthdayWish(empid,this.birthday).subscribe((res) => {
      this.submited.emit(res.toString());
      this.toastr.success("Greeting Send SuccessFully");
    },
      error => {
        console.log(error);
      }
    );
  }


  getColorClass(role: string) {
    let returnValue;  
    switch (role) {
      case 'CAL-PIF':
        returnValue = '#F7C271';
        break;
      case 'Saksham':
        returnValue = '#83E299';
        break;
      case 'BridgeIT':
        returnValue = '#EF8791';
        break;
      case 'CAL & DLLS Campaign':
        returnValue = '#83BCF3';
        break;
      case 'Support Team':
        returnValue = '#AEB6BF';
        break;
      case 'IDI':
        returnValue = '#ffc107';
        break;
      case 'CAL-SIPL':
        returnValue = '#B076FA';
        break;
      case 'BOD':
        returnValue = '#767AFA';
        break;
        case 'CAL-UBS':
          returnValue = '#C08AD2';
          break;
          case 'SEP':
          returnValue = '#D0BF63';
          break;
          case 'My e-School':
            returnValue = '#D65A5A';
            break;
      default:
        returnValue = '#FA768C';
    }
    return returnValue;
  }


  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }
}