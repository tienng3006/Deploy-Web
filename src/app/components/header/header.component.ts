import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  text: boolean = true;
  isOpen: boolean = false;
  isModal: boolean = true;
  isModalSignIn: boolean = false;
  isTextSignIn: boolean = false;

  ngOnInit(): void {}
  setIsModal() {
    return !this.isModal;
  }
  handleOpenModal() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    return this.isOpen;
  }
  handleIsModal() {
    this.isModal = !this.isModal;
    return this.isModal;
  }
}
