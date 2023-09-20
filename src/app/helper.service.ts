import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  userArray = []
 userSubject = new Subject<object>();
 observable$ = this.userSubject.asObservable();

  constructor() { }

  updateArray(name, address) {
    this.userArray.push({name,address})
    this.userSubject.next(this.userArray);
  }  
}
