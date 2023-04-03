import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  timerSource = new BehaviorSubject<boolean>(false);

  currentTimer = this.timerSource.asObservable();
}
