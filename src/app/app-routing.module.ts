import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AteltaListComponent } from './features/atleta/atelta-list/atelta-list.component';
import { AtletaDetailComponent } from './features/atleta/atleta-detail/atleta-detail.component';
import { AtletaInsertComponent } from './features/atleta/atleta-insert/atleta-insert.component';

const routes: Routes = [
  { path: 'atleta/list', component: AteltaListComponent},
  { path: 'atleta/detail/:id', component: AtletaDetailComponent },
   { path: 'atleta/insert', component: AtletaInsertComponent },
  // { path: 'atleta/edit/:id', component: LibroEditComponent },
  { path: '', redirectTo: 'atleta/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
