import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacchinaComponent } from './macchina.component';

describe('MacchinaComponent', () => {
  let component: MacchinaComponent;
  let fixture: ComponentFixture<MacchinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacchinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacchinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
