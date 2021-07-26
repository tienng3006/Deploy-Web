import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-polocy',
  templateUrl: './line-polocy.component.html',
  styleUrls: ['./line-polocy.component.scss'],
})
export class LinePolocyComponent implements OnInit {
  constructor() {}
  listPolocy = [
    {
      id: '1',
      name: 'FREE SHIPPING',
      icon: 'fas fa-truck',
      description: 'Free đơn hàng trên 500k',
    },
    {
      id: '2',
      name: 'SUPPORT 24/7',
      icon: 'fas fa-life-ring',
      description: 'Chat hướng dẫn móc free',
    },
    {
      id: '3',
      name: '30 DAY RETURN ',
      icon: 'fas fa-undo',
      description: 'Hotline 0942182077',
    },
    {
      id: '4',
      name: '100% PAYMENT SECURE',
      icon: 'fas fa-money-check',
      description: 'Ship code toàn quốc',
    },
  ];
  ngOnInit(): void {}
}
