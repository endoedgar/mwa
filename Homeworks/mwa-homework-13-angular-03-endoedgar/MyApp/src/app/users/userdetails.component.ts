import { Component, OnInit } from '@angular/core';
import { RandomUserAPIService } from '../random-user-api.service';
import { flatMap, map, concatMap, shareReplay } from "rxjs/operators";
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'userdetails',
  template: `
      <div>Name: {{ (user$ | async)?.name.title }} {{ (user$ | async)?.name.first }} {{ (user$ | async)?.name.last }}</div>
      <div>Gender: {{ (user$ | async)?.gender }}</div>
      <div>Email: {{ (user$ | async)?.email }}</div>
      <div>Phone: {{ (user$ | async)?.phone }}</div>
      <div>Cell: {{ (user$ | async)?.cell }}</div>
      <div>Picture: <img src="{{ (user$ | async)?.picture.large }}"/></div>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {
  public user$;

  constructor(private randomUserApiService : RandomUserAPIService, private route : ActivatedRoute) {
    this.user$ = route.paramMap.pipe(
      flatMap((params: ParamMap) => params.get('uuid')),
      concatMap(index => randomUserApiService.getCachedData().pipe(map(x => x[index]))),
      shareReplay()
    )
  }

  ngOnInit(): void {
  }

}
