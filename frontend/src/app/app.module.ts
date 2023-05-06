import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule  } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { QrCodeModule } from 'ng-qrcode';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPrintModule } from 'ngx-print';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


import { ServiceBarangApi } from './services/barangApi.service';

import { MainNavComponent } from './components/main-nav/main-nav.component';
import { AppComponent } from './app.component';
import { ViewEditComponent } from './components/viewedit/viewedit.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AllInventoryComponent } from './components/all-inventory/all-inventory.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ViewEditComponent,
    AddInventoryComponent,
    AllInventoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPrintModule,
    CommonModule,
    QrCodeModule,
    NgxPaginationModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [ServiceBarangApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
