import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLoansComponent } from './get-all-loans.component';

describe('GetAllLoansComponent', () => {
  let component: GetAllLoansComponent;
  let fixture: ComponentFixture<GetAllLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
