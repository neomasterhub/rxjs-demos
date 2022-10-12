import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrx1Component } from './ngrx1.component';

describe('Ngrx1Component', () => {
  let component: Ngrx1Component;
  let fixture: ComponentFixture<Ngrx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngrx1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngrx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
