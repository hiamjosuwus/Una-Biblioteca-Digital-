import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { LibrosComponent } from './libros/libros.component';
import { NuLibrosComponent } from './nu-libros/nu-libros.component';
import { NuRevistasComponent } from './nu-revistas/nu-revistas.component';
import { RevistasComponent } from './revistas/revistas.component';
import { UsersComponent } from './users/users.component';

import { UsersInterfaceComponent } from './users-interface/users-interface.component';
import { NuHistoryComponent } from './nu-history/nu-history.component';


const routes: Routes = [
  {path: '', redirectTo: 'content', pathMatch: 'full'},

  /*Usuarios*/
  {path: 'users', component: UsersComponent},
  {path: 'content', component: ContentComponent},
  {path: 'libros', component: LibrosComponent},
  
  /*Componentes del Sistema*/
  {path: 'revistas', component: RevistasComponent},
  {path: 'nuLibros', component: NuLibrosComponent},
  {path: 'nuRevistas', component: NuRevistasComponent},
  {path: 'usersInterface', component: UsersInterfaceComponent},
  {path: 'nuHistory', component: NuHistoryComponent},  

  {path: '**', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
