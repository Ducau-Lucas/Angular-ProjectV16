import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAccueilComponent } from './stats-accueil.component';

describe('StatsAccueilComponent', () => {
  let component: StatsAccueilComponent;
  let fixture: ComponentFixture<StatsAccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsAccueilComponent]
    });
    fixture = TestBed.createComponent(StatsAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
