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
    deedsOfLegend: ''
  };

  whyFoundedOptions: string[] = [];
  whenFoundedOptions: string[] = [];
  progenitorOptions: string[] = [];
  gsPurityOptions: string[] = [];
  demeanourOptions: string[] = [];
  figureOfLegendOptions: string[] = [];
  deedsOfLegendOptions: string[] = [];

  constructor(
      private route: ActivatedRoute, 
        private router: Router, 
          private chapterService: ChapterService) {
      this.chapter = new Chapter();
    }

  ngOnInit(): void {
    this.chapterService.getWhyFoundedOptions().subscribe(data => this.whyFoundedOptions = data);
    this.chapterService.getWhenFoundedOptions().subscribe(data => this.whenFoundedOptions = data);
    this.chapterService.getProgenitorOptions().subscribe(data => this.progenitorOptions = data);
    this.chapterService.getGsPurityOptions().subscribe(data => this.gsPurityOptions = data);
    this.chapterService.getDemeanourOptions().subscribe(data => this.demeanourOptions = data);
    this.chapterService.getFigureOptions().subscribe(data => this.figureOfLegendOptions = data);
    this.chapterService.getDeedsOptions().subscribe(data => this.deedsOfLegendOptions = data);
  }

  fetchRandomWhyFounded(): void {
    this.chapterService.getRandomWhyFounded()
      .subscribe(response => {
        this.chapter.whyFounded = response;
      });
  }

  fetchRandomWhenFounded(): void {
    this.chapterService.getRandomWhenFounded()
      .subscribe(response => {
        this.chapter.whenFounded = response;
      });
  }

  fetchRandomProgenitor(): void {
    this.chapterService.getRandomProgenitor()
      .subscribe(response => {
        this.chapter.progenitor = response;
      });
  }

  fetchRandomGsPurity(): void {
    this.chapterService.getRandomGsPurity()
      .subscribe(response => {
        this.chapter.gsPurity = response;
      });
  }

  fetchRandomDemeanour(): void {
    this.chapterService.getRandomDemeanour()
      .subscribe(response => {
        this.chapter.demeanour = response;
      });
  }

  fetchRandomFigure(): void {
    this.chapterService.getRandomFigure()
      .subscribe(response => {
        this.chapter.figureOfLegend = response;
      });
  }

  fetchRandomDeeds(): void {
    this.chapterService.getRandomDeeds()
      .subscribe(response => {
        this.chapter.deedsOfLegend = response;
      });
  }

  onSubmit() {
    this.chapterService.save(this.chapter).subscribe(result => this.gotoChapterList());
  }

  gotoChapterList() {
    this.router.navigate(['/chapters']);
  }
}