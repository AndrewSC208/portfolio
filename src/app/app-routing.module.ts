import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

	{path: 'Kitchen-sink', loadChildren: 'app/KitchenSink/KitchenSink.module#KitchenSinkModule' },
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class Ng2BoostrapSTARTERRoutingModule { }
