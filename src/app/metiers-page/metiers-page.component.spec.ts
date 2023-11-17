import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetiersPageComponent } from './metiers-page.component';

describe('MetiersPageComponent', () => {
  let component: MetiersPageComponent;
  let fixture: ComponentFixture<MetiersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetiersPageComponent]
    });
    fixture = TestBed.createComponent(MetiersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
