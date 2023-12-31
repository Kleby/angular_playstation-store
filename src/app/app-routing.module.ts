import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OffersComponent } from './pages/offers/offers.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full'},
  { path: 'offers', component: OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
