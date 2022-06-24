import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActivityComponent } from './activity/activity.component';
import { ListComponent } from './list/list.component';

import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './activity/add/add.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './activity/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ActivityComponent, ListComponent, AddComponent, SearchComponent, EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
