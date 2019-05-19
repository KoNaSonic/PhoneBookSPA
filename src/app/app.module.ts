import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDesignModule} from './Modules/mat-design/mat-design.module';

import { AppComponent } from './Components/root/app.component';
import { AuthComponent } from './Components/auth/auth.component';
import { PhoneBookComponent } from './Components/phone-book/phone-book.component';
import { ContactComponent } from './Components/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './Services/http.service';
import {DataExchangeService} from './Services/data-exchange.service';
import {UtilService} from './Services/util.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PatternsService} from './Services/patterns.service';
import {URLsService} from './Services/urls.service';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PhoneBookComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule,
    MatDesignModule,
    FormsModule, ReactiveFormsModule, MatCardModule
  ],
  providers: [HttpService,
              DataExchangeService,
              UtilService,
              PatternsService,
              URLsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
