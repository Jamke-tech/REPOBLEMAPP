import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersModificationComponent } from './users-modification.component';

describe('UsersModificationComponent', () => {
  let component: UsersModificationComponent;
  let fixture: ComponentFixture<UsersModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
