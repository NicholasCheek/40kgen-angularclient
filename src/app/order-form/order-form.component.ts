import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-chapter-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: any = {
    name: '',
    originator: '',
    founding: '',
    flaw: '',
    demeanour: '',
    primarySaint: '',
    saintDeeds: '',
    homeworld: '',
    strategy: '',
    methodsOfWorship: '',
    size: '',
    allies: '',
    enemies: ''
  };

  lockedFields: { [key: string]: boolean } = {};

  constructor(
      private route: ActivatedRoute, 
        private router: Router, 
          private orderService: OrderService) {
      this.order = new Order();
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
        this.order[field] = response.result ?? response;
      },
      error: (err: any) => {
        console.error(`Error fetching ${field}:`, err);
      }
    });
  }

  generateAllRandomFields(): void {
    console.log('Generating random chapter attributes...');
    
    this.fetchRandomValue('originator', () => this.orderService.getRandomOriginator());
    this.fetchRandomValue('founding', () => this.orderService.getRandomFounding());
    this.fetchRandomValue('flaw', () => this.orderService.getRandomFlaw());
    this.fetchRandomValue('demeanour', () => this.orderService.getRandomDemeanour());
    this.fetchRandomValue('primarySaint', () => this.orderService.getRandomPrimarySaint());
    this.fetchRandomValue('saintDeeds', () => this.orderService.getRandomDeeds());
    this.fetchRandomValue('homeworld', () => this.orderService.getRandomHomeworld());
    this.fetchRandomValue('strategy', () => this.orderService.getRandomStrategy());
    this.fetchRandomValue('methodsOfWorship', () => this.orderService.getRandomMethods());
    this.fetchRandomValue('size', () => this.orderService.getRandomSize());
    this.fetchRandomValue('allies', () => this.orderService.getRandomAllies());
    this.fetchRandomValue('enemies', () => this.orderService.getRandomEnemies());
  }

  onSubmit() {
    this.orderService.save(this.order).subscribe(result => this.gotoOrderList());
  }

  gotoOrderList() {
    this.router.navigate(['/orders']);
  }
}