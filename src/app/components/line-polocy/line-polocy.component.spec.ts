import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePolocyComponent } from './line-polocy.component';

describe('LinePolocyComponent', () => {
  let component: LinePolocyComponent;
  let fixture: ComponentFixture<LinePolocyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinePolocyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePolocyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
