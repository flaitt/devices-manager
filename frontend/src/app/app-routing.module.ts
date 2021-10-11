import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevicesComponent } from './views/devices/devices.component'
import { CategoriesComponent } from './views/categories/categories.component'
import { DevicesCreateComponent } from './components/devices/devices-create/devices-create.component'
import { CategoriesCreateComponent } from './components/categories/categories-create/categories-create.component';

const routes: Routes = [
  {
    path: "",
    component: DevicesComponent
  },{
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "devices/create",
    component: DevicesCreateComponent
  },
  {
    path: "categories/create",
    component: CategoriesCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
