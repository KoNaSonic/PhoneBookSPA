import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatternsService {

  static emailPattern = '^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$';
  static passwordPattern = '^(?=.*[0-9])(?=.*[$~\\-_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$~\\-_]{8,}$';

  constructor() { }
}
