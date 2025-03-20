import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterFormComponent } from './chapter-form/chapter-form.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetFormComponent } from './planet-form/planet-form.component';

const routes: Routes = [
  { path: 'chapters', component: ChapterListComponent },
  { path: 'addchapter', component: ChapterFormComponent },
  { path: 'planets', component: PlanetListComponent },
  { path: 'addplanet', component: PlanetFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }