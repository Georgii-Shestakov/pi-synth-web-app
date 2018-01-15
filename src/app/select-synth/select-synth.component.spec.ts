import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSynthComponent } from './select-synth.component';

describe('SelectSynthComponent', () => {
  let component: SelectSynthComponent;
  let fixture: ComponentFixture<SelectSynthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSynthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSynthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
