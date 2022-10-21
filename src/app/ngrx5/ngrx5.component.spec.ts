import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrx5Component } from './ngrx5.component';

describe('Ngrx5Component', () => {
  let component: Ngrx5Component;
  let fixture: ComponentFixture<Ngrx5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ngrx5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngrx5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
