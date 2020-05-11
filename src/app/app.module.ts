import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityComponent } from './city/city.component';
import { CityFormComponent } from './city-form/city-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



         @NgModule({
          declarations: [
            AppComponent,
            HomeComponent,
            AboutComponent,
            CityComponent,
            CityFormComponent
          ],
          imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule
          ],
          providers: [],
          bootstrap: [AppComponent]
        })
        export class AppModule { }