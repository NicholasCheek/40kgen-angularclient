import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { Chapter } from '../chapter';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-form',
  templateUrl: './chapter-form.component.html',
  styleUrls: ['./chapter-form.component.css']
})
export class ChapterFormComponent implements OnInit {
  chapter: any = {
    name: '',
    whyFounded: '',
    whenFounded: '',
    progenitor: '',
    gsPurity: '',
    demeanour: '',
    figureOfLegend: '',
    deedsOfLegend: '',
    beliefs: ''
  };

  lockedFields: { [key: string]: boolean } = {};

  constructor(
      private route: ActivatedRoute, 
        private router: Router, 
          private chapterService: ChapterService) {
      this.chapter = new Chapter();
    }

  ngOnInit(): void {}

  toggleLock(field: string): void {
    this.lockedFields[field] = !this.lockedFields[field];
  }

  fetchRandomValue(field: string, serviceMethod: () => any): void {
    if (this.lockedFields[field]) {
      console.log(`Field ${field} is locked, skipping...`);
      return;
    }

    console.log(`Fetching random value for ${field}...`);
    serviceMethod().subscribe({
      next: (response: { result: any }) => {
        console.log(`API Response for ${field}:`, response);
        this.chapter[field] = response.result ?? response;
      },
      error: (err: any) => {
        console.error(`Error fetching ${field}:`, err);
      }
    });
  }

  generateAllRandomFields(): void {
    console.log('Generating random chapter attributes...');
    
    this.fetchRandomValue('whyFounded', () => this.chapterService.getRandomWhyFounded());
    this.fetchRandomValue('whenFounded', () => this.chapterService.getRandomWhenFounded());
    this.fetchRandomValue('progenitor', () => this.chapterService.getRandomProgenitor());
    this.fetchRandomValue('gsPurity', () => this.chapterService.getRandomGsPurity());
    this.fetchRandomValue('demeanour', () => this.chapterService.getRandomDemeanour());
    this.fetchRandomValue('figureOfLegend', () => this.chapterService.getRandomFigure());
    this.fetchRandomValue('deedsOfLegend', () => this.chapterService.getRandomDeeds());
    this.fetchRandomValue('beliefs', () => this.chapterService.getRandomBeliefs());
  }

  onSubmit() {
    this.chapterService.save(this.chapter).subscribe(result => this.gotoChapterList());
  }

  gotoChapterList() {
    this.router.navigate(['/chapters']);
  }
}