import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './activity/edit/edit.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  
  
    { path: 'search', component: SearchComponent },
    { path: 'edit', component: EditComponent },
    //,

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
