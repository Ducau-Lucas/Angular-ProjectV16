import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnesGlobalComponent } from './partnes-global.component';

describe('PartnesGlobalComponent', () => {
  let component: PartnesGlobalComponent;
  let fixture: ComponentFixture<PartnesGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnesGlobalComponent]
    });
    fixture = TestBed.createComponent(PartnesGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
