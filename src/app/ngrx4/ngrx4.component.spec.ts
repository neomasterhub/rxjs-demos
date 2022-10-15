import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrx4Component } from './ngrx4.component';

describe('Ngrx4Component', () => {
  let component: Ngrx4Component;
  let fixture: ComponentFixture<Ngrx4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngrx4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngrx4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
