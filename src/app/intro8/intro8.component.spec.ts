import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro8Component } from './intro8.component';

describe('Intro8Component', () => {
  let component: Intro8Component;
  let fixture: ComponentFixture<Intro8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
