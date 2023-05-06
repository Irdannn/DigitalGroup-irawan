import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AllInventoryComponent } from './components/all-inventory/all-inventory.component';
import { ViewEditComponent } from './components/viewedit/viewedit.component';

const routes: Routes = [
  {path:'', redirectTo:'allinventory', pathMatch: 'full'},
  {path: 'allinventory', component: AllInventoryComponent},
  {path: 'add', component: AddInventoryComponent},
  {path: 'allinventory/edit/:id', component: ViewEditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
