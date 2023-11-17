import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBannerGlobalComponent } from './contact-banner-global.component';

describe('ContactBannerGlobalComponent', () => {
  let component: ContactBannerGlobalComponent;
  let fixture: ComponentFixture<ContactBannerGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactBannerGlobalComponent]
    });
    fixture = TestBed.createComponent(ContactBannerGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
