import { Injectable } from '@angular/core';
import { Supplier } from '../interfaces/data.interfaces';
import { delay, Observable, of } from 'rxjs';

const SUPPLIERS: Supplier[] = [
  {
    id: 1,
    name: 'Supplier 1',
    address: 'Adress 1',
    phone: '0123456789',
    email: 'supplier1@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 2',
    address: 'Adress 2',
    phone: '0123456789',
    email: 'supplier2@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 3',
    address: 'Adress 3',
    phone: '0123456789',
    email: 'supplier3@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 4',
    address: 'Adress 4',
    phone: '0123456789',
    email: 'supplier4@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 5',
    address: 'Adress 5',
    phone: '0123456789',
    email: 'supplier5@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 6',
    address: 'Adress 6',
    phone: '0123456789',
    email: 'supplier6@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 7',
    address: 'Adress 7',
    phone: '0123456789',
    email: 'supplier7@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 8',
    address: 'Adress 8',
    phone: '0123456789',
    email: 'supplier8@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 9',
    address: 'Adress 9',
    phone: '0123456789',
    email: 'supplier9@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 10',
    address: 'Adress 10',
    phone: '0123456789',
    email: 'supplie10@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 11',
    address: 'Adress 11',
    phone: '0123456789',
    email: 'supplier11@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 12',
    address: 'Adress 12',
    phone: '0123456789',
    email: 'supplier12@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 13',
    address: 'Adress 13',
    phone: '0123456789',
    email: 'supplier13@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 14',
    address: 'Adress 14',
    phone: '0123456789',
    email: 'supplier14@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 15',
    address: 'Adress 15',
    phone: '0123456789',
    email: 'supplier15@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 16',
    address: 'Adress 16',
    phone: '0123456789',
    email: 'supplier16@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 17',
    address: 'Adress 17',
    phone: '0123456789',
    email: 'supplier17@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 18',
    address: 'Adress 18',
    phone: '0123456789',
    email: 'supplier18@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 19',
    address: 'Adress 19',
    phone: '0123456789',
    email: 'supplier19@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 20',
    address: 'Adress 20',
    phone: '0123456789',
    email: 'supplier20@mail.com',
  },
  {
    id: 1,
    name: 'Supplier 21',
    address: 'Adress 21',
    phone: '0123456789',
    email: 'supplier21@mail.com',
  },
];

@Injectable()
export class DataService {
  getData(): Observable<Supplier[]> {
    return of(SUPPLIERS).pipe(delay(1000));
  }

  // updateData(id: number, values: )
}
