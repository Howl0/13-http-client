import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor() {}
  serviceproperty;
 
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
