import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/menu';
import { Router } from '@angular/router';
import { MasterServiceService } from 'src/app/shared/services/master-service.service';

@Component({
  selector: 'app-employeemenu',
  templateUrl: './employeemenu.component.html',
  styleUrls: ['./employeemenu.component.scss']
})
export class EmployeemenuComponent implements OnInit {
  Menus: Menu[] = [];
  Menusreport: Menu[] = [];
   emp:HTMLElement;
 count=0;
 pgid;pgname;role;ogid;depid;
 constructor(private jankarisvc: MasterServiceService, private router: Router) {

  var userId = localStorage.getItem("UserId");
  var MenuId = localStorage.getItem("menuid");
  this.pgid = localStorage.getItem("pgid");
  this.pgname = localStorage.getItem("pgname");
  this.role = localStorage.getItem("role");
  this.ogid = localStorage.getItem("ogid");
  this.depid = localStorage.getItem("depid");
  this.jankarisvc.getMenus(userId, this.pgid ,this.role , MenuId, "list" ).subscribe(
      (data: any) => {
          this.Menus = data; 
      }
  );

  this.jankarisvc.getMenus(userId, this.pgid ,this.role, MenuId,"report").subscribe(
    (data: any) => {
        this.Menusreport = data;
        this.onchange(  this.Menusreport.length);
    }
);


}

submenu(menuurl) {
  var UserId = localStorage.getItem("UserId");
  localStorage.setItem('menuurl', menuurl);
  localStorage.setItem('UserId', UserId);
  this.router.navigate(['/'+menuurl]);

}

onchange (length)
{
  this.emp = document.getElementById("myDIV");
  if ( length==0) {
   this.emp.style.display = "none";
     }
     else  {
       this.emp.style.display = "block";
     }  
  

}
ngOnInit() {
}
}