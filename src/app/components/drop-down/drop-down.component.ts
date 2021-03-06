import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() dropdownItems: string[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
