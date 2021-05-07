import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCreationComponent } from './offer-creation.component';

describe('OfferCreationComponent', () => {
  let component: OfferCreationComponent;
  let fixture: ComponentFixture<OfferCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
