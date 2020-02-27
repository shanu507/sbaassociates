import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnkitComponent } from './ankit/ankit.component';
import { SachinComponent } from './sachin/sachin.component';
import { NitinComponent } from './nitin/nitin.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {path:"",pathMatch:'full',component:HomeComponent},
  {path:"ankit",component:AnkitComponent},
  {path:"sachin",component:SachinComponent},
  {path:"nitin",component:NitinComponent},
  {path:"service",component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
