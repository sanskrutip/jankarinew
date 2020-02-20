import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
showLoadingIndicator = true;
constructor(private translate: TranslateService, private _router: Router,private bnIdle: BnNgIdleService) {

   this.bnIdle.startWatching(1800).subscribe((res) => {
       if(res) {
         
           this._router.navigate(['/login']);
     
       }
     })
   

translate.setDefaultLang('en');
this._router.events.subscribe((routerEvent: Event) => {
if (routerEvent instanceof NavigationStart) {
this.showLoadingIndicator = true;
}
if (routerEvent instanceof NavigationEnd ||
routerEvent instanceof NavigationError ||
routerEvent instanceof NavigationCancel) {
this.showLoadingIndicator = false;
}
});
}



ngOnInit() {

}
}