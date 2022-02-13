import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeattechnoComponent } from './lifeattechno.component';

describe('LifeattechnoComponent', () => {
  let component: LifeattechnoComponent;
  let fixture: ComponentFixture<LifeattechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeattechnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeattechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
