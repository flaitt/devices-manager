import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DevicesComponent } from './views/devices/devices.component';

import { MatCardModule } from '@angular/material/card';
import { CategoriesComponent } from './views/categories/categories.component';
import { DevicesCreateComponent } from './components/devices/devices-create/devices-create.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DevicesReadComponent } from './components/devices/devices-read/devices-read.component';
import { DevicesRead2Component } from './components/devices/devices-read2/devices-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CategoriesReadComponent } from './components/categories/categories-read/categories-read.component';
import { CategoriesCreateComponent } from './components/categories/categories-create/categories-create.component';

import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DevicesComponent,
    CategoriesComponent,
    DevicesCreateComponent,
    DevicesReadComponent,
    DevicesRead2Component,
    CategoriesReadComponent,
    CategoriesCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
