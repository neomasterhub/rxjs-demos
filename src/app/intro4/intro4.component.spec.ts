import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro4Component } from './intro4.component';

describe('Intro4Component', () => {
  let component: Intro4Component;
  let fixture: ComponentFixture<Intro4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
