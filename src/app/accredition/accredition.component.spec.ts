import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditionComponent } from './accredition.component';

describe('AccreditionComponent', () => {
  let component: AccreditionComponent;
  let fixture: ComponentFixture<AccreditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
