import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { User } from '../user';
import { MasterServiceService } from '../shared/services/master-service.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    message: string; 
    constructor(private router: Router,private service: MasterServiceService) {}

    ngOnInit() {}

    Loginuser(values) {

        let user = new User();
        user.UserName = values.UserName;
        user.Password = values.Password;
        this.service.login(user).subscribe(resp => {
          console.log(resp[0].FullName)
          console.log(resp[0].Result)
          console.log(resp[0].UserName)
          console.log(resp[0].UserId)

          if (resp[0].Result === "Faliure")
          {
          this.message = "Please check Email and password"; 
          }
         else if (resp[0].Result === "User Inactive")
          {
          this.message = "User Inactive"; 
          }
          else {
            localStorage.setItem('role',resp[0].Userrole);
            localStorage.setItem('UserId', resp[0].UserId);
                      localStorage.setItem('UserName', JSON.stringify(resp[0].UserName));
                      localStorage.setItem('role',resp[0].Userrole);
                      localStorage.setItem('FullName',resp[0].FullName);
                      if(resp[0].UserName=='Admin'){
                        console.log("Hello Admin");
                          this.router.navigate(["/AdminDashboard"]);
                      }
                      else  {
                        console.log("Hello User");
                        this.router.navigate(["/home"]);
                      }
          }
        });
      }
}
