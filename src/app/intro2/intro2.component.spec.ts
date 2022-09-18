import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro2Component } from './intro2.component';

describe('Intro2Component', () => {
  let component: Intro2Component;
  let fixture: ComponentFixture<Intro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
