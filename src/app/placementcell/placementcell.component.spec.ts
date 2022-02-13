import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementcellComponent } from './placementcell.component';

describe('PlacementcellComponent', () => {
  let component: PlacementcellComponent;
  let fixture: ComponentFixture<PlacementcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
