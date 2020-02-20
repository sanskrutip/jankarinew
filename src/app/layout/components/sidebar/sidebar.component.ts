import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Menu } from 'src/app/menu';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';
import { User } from 'src/app/user';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    UserName: User;
    Menus: Menu[] = [];
    menusWithoutSubmenus: Menu[] = [];
    menuswithSubmenus: Menu[] = [];
    tab : any = 'tab1';
    tab1 : any
    tab2 : any
    tab3 : any
    Clicked : boolean
    selectedItem : string;
    pgid;pgname;role;ogid;depid;
    FullName;
    notifycount: number;
    array = [];
    count: number;
    UserId;
    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private jankarisvc: MasterServiceService, private router: Router) {
        this.UserId = localStorage.getItem("UserId");
        this.pgid = localStorage.getItem("pgid");
        this.pgname = localStorage.getItem("pgname");
        this.FullName = localStorage.getItem("FullName");
        this.role = localStorage.getItem("role");
        this.ogid = localStorage.getItem("ogid");
        this.depid = localStorage.getItem("depid");
        console.log(        this.role);
        this.jankarisvc.getMenus(this.UserId,this.pgid , this.role, null, null).subscribe(
            (data: any) => {
                this.Menus = data;
                localStorage.setItem('menuid', data[0].menuid);
                localStorage.setItem('UserId', data[0].UserId);
                console.log(data[0].menuid);
                console.log(data[0].UserId);
            }
        );
        this.UserName = JSON.parse(localStorage.getItem('UserName'));


       
    }

   
    submenu(menuid,menuurl) {
        
        var UserId = localStorage.getItem("UserId");
        localStorage.setItem('menuid', menuid);
        localStorage.setItem('UserId', UserId);
       this.router.navigate([menuurl]);
    }

    ngOnInit() {

        var admin = document.getElementById("addata");
        if( this.role=="R1"){
            admin.style.display="none";
        }
        
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';

        
        this.jankarisvc.GetEmployeeLeaveList("where EmployeeLeave.status='Pending' and EmployeeProgram.reportto='" + this.UserId + "'").subscribe((data1: any) => {
         
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

        this.jankarisvc.GetSalAlertList( this.UserId ).subscribe((data2: any) => {
        
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

    


        listClick(event, newValue) {
            console.log(newValue);
            this.selectedItem = newValue;  
           
        }

        redirect() {
            this.router.navigate(["/Notifications"]);
        }
        home(){
            this.router.navigate(["/home"]);
        }
}