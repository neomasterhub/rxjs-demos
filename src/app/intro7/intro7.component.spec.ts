import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro7Component } from './intro7.component';

describe('Intro7Component', () => {
  let component: Intro7Component;
  let fixture: ComponentFixture<Intro7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
