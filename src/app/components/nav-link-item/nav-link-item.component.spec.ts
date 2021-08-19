import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkItemComponent } from './nav-link-item.component';

describe('NavLinkItemComponent', () => {
  let component: NavLinkItemComponent;
  let fixture: ComponentFixture<NavLinkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLinkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
