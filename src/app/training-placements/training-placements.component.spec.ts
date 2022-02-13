import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlacementsComponent } from './training-placements.component';

describe('TrainingPlacementsComponent', () => {
  let component: TrainingPlacementsComponent;
  let fixture: ComponentFixture<TrainingPlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingPlacementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
