import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowBannerAccueilComponent } from './slideshow-banner-accueil.component';

describe('SlideshowBannerAccueilComponent', () => {
  let component: SlideshowBannerAccueilComponent;
  let fixture: ComponentFixture<SlideshowBannerAccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideshowBannerAccueilComponent]
    });
    fixture = TestBed.createComponent(SlideshowBannerAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
