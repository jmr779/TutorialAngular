import { Injectable } from '@angular/core';
import { User } from './user';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Jose Medina', pass: '123', email: 'jmr779@inlumine.ual.es' },
      { id: 12, name: 'Alberto', pass: 'abc', email: 'aff125@inlumine.ual.es' },
      { id: 13, name: 'Alfonso', pass: '123', email: 'acg151@inlumine.ual.es' },
      { id: 14, name: 'Pedro Picapiedra', pass: 'abc', email: 'jge534@inlumine.ual.es' },
      { id: 15, name: 'Antoine', pass: '123', email: 'fje498@inlumine.ual.es' },
      { id: 16, name: 'Peter', pass: 'abc', email: 'fue343@inlumine.ual.es' },
      { id: 17, name: 'Johan', pass: '123', email: 'fir434@inlumine.ual.es' },
      { id: 18, name: 'Cedry', pass: 'abc', email: 'rrr433@inlumine.ual.es' },
      { id: 19, name: 'Wctos', pass: '123', email: 'ref333@inlumine.ual.es' },
      { id: 20, name: 'Tornado', pass: 'abc', email: 'rew345@inlumine.ual.es' }
    ];
    return { users };
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the users array is empty,
  // the method below returns the initial number (11).
  // if the users array is not empty, the method below returns the highest
  // user id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
