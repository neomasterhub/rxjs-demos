import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro6Component } from './intro6.component';

describe('Intro6Component', () => {
  let component: Intro6Component;
  let fixture: ComponentFixture<Intro6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
