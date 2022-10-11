import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro5Component } from './intro5.component';

describe('Intro5Component', () => {
  let component: Intro5Component;
  let fixture: ComponentFixture<Intro5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
