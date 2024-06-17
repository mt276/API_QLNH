import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuAddEditComponent } from './menu/menu-add-edit/menu-add-edit.component';

import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemListComponent } from './menu-item/menu-item-list/menu-item-list.component';
import { MenuItemAddEditComponent } from './menu-item/menu-item-add-edit/menu-item-add-edit.component';

import { AccountComponent } from './account/account.component';

import { SharedService } from './shared.service';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    MenuListComponent,
    MenuAddEditComponent,

    MenuItemComponent,
    MenuItemListComponent,
    MenuItemAddEditComponent,
    
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
