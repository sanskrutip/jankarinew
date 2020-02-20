import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    // canActivate() {
    //     if (localStorage.getItem('isLoggedin')) {
    //         return true;
    //     }

    //     this.router.navigate(['/login']);
    //     return false;
    // }

    
    canActivate()
    {
        var user = localStorage.getItem("UserId");
          if(user !=undefined)  {
            return true;
          }      
             
          else
          {
            this.router.navigate(['/login']);
              return false;
          }
    }
}


