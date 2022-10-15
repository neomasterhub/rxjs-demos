import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrx3Component } from './ngrx3.component';

describe('Ngrx3Component', () => {
  let component: Ngrx3Component;
  let fixture: ComponentFixture<Ngrx3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngrx3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngrx3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
