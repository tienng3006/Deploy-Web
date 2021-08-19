import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link-item',
  templateUrl: './nav-link-item.component.html',
  styleUrls: ['./nav-link-item.component.scss'],
})
export class NavLinkItemComponent implements OnInit {
  @Input() category!: string;
  constructor() {}

  ngOnInit(): void {}
}
