import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrx2Component } from './ngrx2.component';

describe('Ngrx2Component', () => {
  let component: Ngrx2Component;
  let fixture: ComponentFixture<Ngrx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngrx2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngrx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
