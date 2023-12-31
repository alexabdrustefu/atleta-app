import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AteltaListComponent } from './features/atleta/atelta-list/atelta-list.component';
import { FormsModule } from '@angular/forms';
import { AtletaDetailComponent } from './features/atleta/atleta-detail/atleta-detail.component';
import { AtletaInsertComponent } from './features/atleta/atleta-insert/atleta-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    AteltaListComponent,
    NavbarComponent,
    FooterComponent,
    AtletaDetailComponent,
    AtletaInsertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
