import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { O9800Component } from './o9800.component';

describe('O9800Component', () => {
  let component: O9800Component;
  let fixture: ComponentFixture<O9800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ O9800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(O9800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
