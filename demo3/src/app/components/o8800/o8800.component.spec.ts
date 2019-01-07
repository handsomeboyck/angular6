import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { O8800Component } from './o8800.component';

describe('O8800Component', () => {
  let component: O8800Component;
  let fixture: ComponentFixture<O8800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ O8800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(O8800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
