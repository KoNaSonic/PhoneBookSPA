import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URLsService} from './urls.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(authInfo) {
    return this.http.post(URLsService.url + URLsService.urlLogin,
                          authInfo);
  }

  register(authInfo) {
    return this.http.post(URLsService.url + URLsService.urlRegister,
      authInfo);
  }

  getAll() {
    return this.http.get(URLsService.url + URLsService.urlContacts,
      {headers: {Authorization: localStorage.getItem('contact')}});
  }
}
