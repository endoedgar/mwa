import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RandomUserAPIService } from '../random-user-api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeforeAccessService implements CanActivate {

  constructor(private randomUserApiService : RandomUserAPIService, private router : Router) {  }
  // my dear, what is the purpose of importing all of this immediatly? was it easier to read if you import it at the begining ?   
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return this.randomUserApiService.getCachedData().pipe(
        map(data => {
          if(typeof data[route.params.uuid] !== 'undefined')
            return true;
          return this.router.parseUrl('/notfound'); 
        })
    );
  }
}
