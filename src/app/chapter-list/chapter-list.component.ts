import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapter';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  chapters: Chapter[] = [];

  constructor(private chapterService: ChapterService) {
  }

  ngOnInit() {
    this.chapterService.findAll().subscribe(data => {
      this.chapters = data;
    });
  }
}