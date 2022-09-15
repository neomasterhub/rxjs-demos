import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro1Component } from './intro1.component';

describe('Intro1Component', () => {
  let component: Intro1Component;
  let fixture: ComponentFixture<Intro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
