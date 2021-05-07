import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferModificationComponent } from './offer-modification.component';

describe('OfferModificationComponent', () => {
  let component: OfferModificationComponent;
  let fixture: ComponentFixture<OfferModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
