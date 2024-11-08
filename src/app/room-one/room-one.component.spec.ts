import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomOneComponent } from './room-one.component';

describe('RoomOneComponent', () => {
  let component: RoomOneComponent;
  let fixture: ComponentFixture<RoomOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
