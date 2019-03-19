import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatepartComponent } from './ratepart.component';

describe('RatepartComponent', () => {
  let component: RatepartComponent;
  let fixture: ComponentFixture<RatepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
