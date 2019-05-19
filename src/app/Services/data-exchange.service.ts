import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {

  static page = 'auth';
  static contacts = [];
  constructor() { }

  static setPage(value) {
    this.page = value;
  }

  static getPage() {
    return this.page;
  }

  static getContacts() {
    return this.contacts;
  }

  static setContacts(value) {
    this.contacts = value;
  }
}
