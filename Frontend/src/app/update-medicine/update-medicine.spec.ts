import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicine } from './update-medicine';

describe('UpdateMedicine', () => {
  let component: UpdateMedicine;
  let fixture: ComponentFixture<UpdateMedicine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMedicine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMedicine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
