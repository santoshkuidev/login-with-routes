import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  isAuthenticated:boolean = false;
  user: BehaviorSubject<any> = new BehaviorSubject('');
  constructor() { }
}
