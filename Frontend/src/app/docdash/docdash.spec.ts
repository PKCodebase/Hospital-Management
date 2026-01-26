import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docdash } from './docdash';

describe('Docdash', () => {
  let component: Docdash;
  let fixture: ComponentFixture<Docdash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Docdash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Docdash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
