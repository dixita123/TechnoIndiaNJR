import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SHComponent } from './sh.component';

describe('SHComponent', () => {
  let component: SHComponent;
  let fixture: ComponentFixture<SHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
