import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCAComponent } from './master-ca.component';

describe('MasterCAComponent', () => {
  let component: MasterCAComponent;
  let fixture: ComponentFixture<MasterCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
