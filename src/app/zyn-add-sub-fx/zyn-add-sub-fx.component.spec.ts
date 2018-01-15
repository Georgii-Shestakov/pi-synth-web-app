import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZynAddSubFxComponent } from './zyn-add-sub-fx.component';

describe('ZynAddSubFxComponent', () => {
  let component: ZynAddSubFxComponent;
  let fixture: ComponentFixture<ZynAddSubFxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZynAddSubFxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZynAddSubFxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
