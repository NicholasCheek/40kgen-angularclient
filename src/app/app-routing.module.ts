import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterFormComponent } from './chapter-form/chapter-form.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetFormComponent } from './planet-form/planet-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [
  { path: 'chapters', component: ChapterListComponent },
  { path: 'addchapter', component: ChapterFormComponent },
  { path: 'planets', component: PlanetListComponent },
  { path: 'addplanet', component: PlanetFormComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'addorder', component: OrderFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }