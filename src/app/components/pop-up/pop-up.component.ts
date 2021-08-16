import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  isOpen: boolean = false;
  constructor() {}
  handleOpenModal() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    return this.isOpen;
  }
  ngOnInit(): void {}
}
