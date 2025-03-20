import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Chapter } from './chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private apiUrl = 'http://localhost:8080/chapters';

  constructor(private http: HttpClient) {}

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  public save(chapter: Chapter) {
      return this.http.post<Chapter>(this.apiUrl, chapter);
  }

  getRandomWhyFounded(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-why-founded`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
      );
  }

  getRandomWhenFounded(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-when-founded`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
      );
  }

  getRandomProgenitor(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-progenitor`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
      );
  }

  getRandomGsPurity(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-gspurity`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
      );
  }

  getRandomDemeanour(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-demeanour`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
      );
  }

  getRandomFigure(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-figure`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
      );
  }

  getRandomDeeds(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-deeds`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
      );
  }

  getRandomBeliefs(): Observable<string> {
    return this.http.get<{ value: string }>(`${this.apiUrl}/random-beliefs`, { responseType: 'json' })
      .pipe(
        map((response: { value: any; }) => response.value)
      );
  }
}