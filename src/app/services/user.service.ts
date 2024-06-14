import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user$: Observable<UserModel>;

  public constructor() {
    this.user$ = new BehaviorSubject<UserModel>({ 
      first: 'Tammy',
      last: 'Dresen',
      address: {
      street: { number: '123', name: 'Main St' },
      city: 'Springfield',
      state: 'IL',
      zip: '62701'

    } }) as Observable<UserModel>;
  }
}
