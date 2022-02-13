import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrymousComponent } from './industrymous.component';

describe('IndustrymousComponent', () => {
  let component: IndustrymousComponent;
  let fixture: ComponentFixture<IndustrymousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrymousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
