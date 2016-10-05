import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	// {path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
	// {path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
	// {path: 'porfolio', loadChildren: 'app/porfolio/porfolio.module#PorfolioModule' },
	// {path: 'skills', loadChildren: 'app/skills/skills.module#SkillsModule' },
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class Ng2BoostrapSTARTERRoutingModule { }
