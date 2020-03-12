import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserAPIService {
  constructor(private http : HttpClient) { }

  public getOnlineData() {
    this.http.get("https://randomuser.me/api/?results=10").subscribe(
      res => {
        localStorage.setItem("users", JSON.stringify(res['results']));
      }
    );
  }

  public getCachedData() : Observable<any> {
    return of(JSON.parse(localStorage.getItem('users')));
  }
}
