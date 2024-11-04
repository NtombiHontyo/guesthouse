import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFourComponent } from './room-four.component';

describe('RoomFourComponent', () => {
  let component: RoomFourComponent;
  let fixture: ComponentFixture<RoomFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
