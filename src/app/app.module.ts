import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* APP ROOT */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

/* SHARED COMPONENTS */
import { MainNavComponent } from './shared/main-nav/main-nav.component';

/* FEATURE MODULES */
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SkillsModule } from './skills/skills.module';

/* ROUTER */
import { Ng2BoostrapSTARTERRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    HomeModule,
    AboutModule,
    ContactModule,
    PortfolioModule,
    SkillsModule,
    Ng2BoostrapSTARTERRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
