import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { AccountComponent } from './account/account.component';


const routes: Routes = [
  {path: 'menu', component:MenuComponent},
  {path: 'menuitem', component:MenuItemComponent},
  {path: 'login', component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
