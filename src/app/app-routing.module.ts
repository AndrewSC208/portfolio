import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* FEATURE MODULES */
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SkillsModule } from './skills/skills.module';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class Ng2BoostrapSTARTERRoutingModule { }
