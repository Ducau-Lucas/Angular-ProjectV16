import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGlobalComponent } from './navbar-global.component';

describe('NavbarGlobalComponent', () => {
  let component: NavbarGlobalComponent;
  let fixture: ComponentFixture<NavbarGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarGlobalComponent]
    });
    fixture = TestBed.createComponent(NavbarGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
