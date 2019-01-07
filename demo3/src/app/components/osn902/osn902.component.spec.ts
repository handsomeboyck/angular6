import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSN902Component } from './osn902.component';

describe('OSN902Component', () => {
  let component: OSN902Component;
  let fixture: ComponentFixture<OSN902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSN902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSN902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
