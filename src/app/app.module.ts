import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterFormComponent } from './chapter-form/chapter-form.component';
import { ChapterService } from './chapter.service';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetFormComponent } from './planet-form/planet-form.component';
import { PlanetService } from './planet.service';

@NgModule({
  declarations: [
    AppComponent,
    ChapterListComponent,
    ChapterFormComponent,
    PlanetListComponent,
    PlanetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ChapterService, PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }