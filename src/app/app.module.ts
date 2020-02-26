import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestangularModule } from 'ngx-restangular';
import { AppComponent } from './app.component';
import {HomeComponent} from './views/Home/home.component';
import {ErrorComponent} from './views/Error/error.component';
import {FooterComponent} from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainnavComponent } from './mainnav/mainnav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { MaterialModule } from './Material/material-module';
import { PortfolioLanguangesPipe } from './portfolio/portfolio.pipe';
import { GameProjectListComponent } from './gameprojects/gameproject-list/gameprojectlist.component';



const appRoutes: Routes = [
  { path: '', 
  component: HomeComponent,
  pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    HomeComponent,
    ErrorComponent,
    PortfolioListComponent,
    PortfolioLanguangesPipe,
    FooterComponent,
    GameProjectListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
