import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {HttpService} from './http.service';
import {DataExchangeService} from './data-exchange.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private matSnackBar: MatSnackBar,
              private http: HttpService) { }

  getRequiredPatternError(fc: FormControl, requiredMsg: string, patternMsg: string): string {
    if (fc.hasError('required')) {return requiredMsg; }
    if (fc.hasError('pattern')) {return patternMsg; }
    return '';
  }

  snack(msg) {
    this.matSnackBar.open(msg, null, {duration: 3000, panelClass: 'snack'});
  }

  refresh() {
    this.http.getAll().subscribe(
      (success) => { DataExchangeService.setContacts(success);
                     console.log(success); }
    );

  }
}
