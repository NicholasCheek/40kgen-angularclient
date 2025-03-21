import { Component } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.findAll().subscribe(data => {
      this.orders = data;
    });
  }

}
