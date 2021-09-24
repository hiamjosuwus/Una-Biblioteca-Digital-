import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { UsersComponent } from './users/users.component';
import { LibrosComponent } from './libros/libros.component';
import { RevistasComponent } from './revistas/revistas.component';

import { Header2Component } from './header2/header2.component';
import { FormsModule } from '@angular/forms';

import { NuLibrosComponent } from './nu-libros/nu-libros.component';
import { NuRevistasComponent } from './nu-revistas/nu-revistas.component';
import { UsersInterfaceComponent } from './users-interface/users-interface.component';
import { NuHistoryComponent } from './nu-history/nu-history.component';  



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UsersComponent,
    LibrosComponent,
    RevistasComponent,
    Header2Component,
    NuLibrosComponent,
    NuRevistasComponent,
    UsersInterfaceComponent,
    NuHistoryComponent,   
      
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
