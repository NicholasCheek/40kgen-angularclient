import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}`);
    }
  
    public save(order: Order) {
        return this.http.post<Order>(this.apiUrl, order);
    }

    getRandomOriginator(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-originator`, { responseType: 'json' })
        .pipe(
          map((response: { value: any; }) => response.value)
        );
    }

    getRandomFounding(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-founding`, { responseType: 'json' })
        .pipe(
          map((response: { value: any; }) => response.value)
        );
    }

    getRandomFlaw(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-flaw`, { responseType: 'json' })
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

    getRandomPrimarySaint(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-primary-saint`, { responseType: 'json' })
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

    getRandomHomeworld(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-homeworld`, { responseType: 'json' })
        .pipe(
          map((response: { value: any; }) => response.value)
        );
    }

    getRandomStrategy(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-strategy`, { responseType: 'json' })
        .pipe(
          map((response: { value: any; }) => response.value)
        );
    }

    getRandomMethods(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-methods`, { responseType: 'json' })
        .pipe(
          map((response: { value: any; }) => response.value)
        );
    }

    getRandomSize(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-size`, { responseType: 'json' })
        .pipe(
          map((response: { value: any; }) => response.value)
        );
    }

    getRandomAllies(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-allies`, { responseType: 'json' })
        .pipe(
          map((response: { value: any; }) => response.value)
        );
    }

    getRandomEnemies(): Observable<string> {
      return this.http.get<{ value: string }>(`${this.apiUrl}/random-enemies`, { responseType: 'json' })
        .pipe(
          map((response: { value: any; }) => response.value)
        );
    }
}
