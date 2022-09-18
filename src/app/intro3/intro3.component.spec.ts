import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Intro3Component } from './intro3.component';

describe('Intro3Component', () => {
  let component: Intro3Component;
  let fixture: ComponentFixture<Intro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Intro3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Intro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
