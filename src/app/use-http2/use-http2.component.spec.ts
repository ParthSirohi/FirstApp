import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseHttp2Component } from './use-http2.component';

describe('UseHttp2Component', () => {
  let component: UseHttp2Component;
  let fixture: ComponentFixture<UseHttp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseHttp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseHttp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
