import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageoneComponent } from './pages/pageone/pageone.component';
import { PagetwoComponent } from './pages/pagetwo/pagetwo.component';
import { PagethreeComponent } from './pages/pagethree/pagethree.component';

const routes: Routes = [
  { path: '', redirectTo: '/pagetwo', pathMatch: 'full' },
  { path: 'pageone', component: PageoneComponent },
  { path: 'pagetwo', component: PagetwoComponent },
  { path: 'pagethree', component: PagethreeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
