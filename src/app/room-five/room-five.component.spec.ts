import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFiveComponent } from './room-five.component';

describe('RoomFiveComponent', () => {
  let component: RoomFiveComponent;
  let fixture: ComponentFixture<RoomFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomFiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
