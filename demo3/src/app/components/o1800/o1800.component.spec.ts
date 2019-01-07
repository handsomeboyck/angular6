import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { O1800Component } from './o1800.component';

describe('O1800Component', () => {
  let component: O1800Component;
  let fixture: ComponentFixture<O1800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ O1800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(O1800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
