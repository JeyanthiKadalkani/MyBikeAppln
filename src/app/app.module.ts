import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from './shared/modules/shared.module';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { BikeComponent } from './bikes/bike.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'bikes', component: BikeComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'admin', component: AdminComponent },
 
  { path: '',   redirectTo: '/developers', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    BikeComponent,
    AdminComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
