import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';
import swal from 'sweetalert';
import { AuthComponent } from './auth/auth/auth.component';
import { ComponentsComponent } from './components/components/components.component';
import { LayoutsComponent } from './layouts/layouts/layouts.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component' ;
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ComponentsComponent,
    LayoutsComponent,
    TableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
