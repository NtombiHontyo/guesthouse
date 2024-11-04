import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSevenComponent } from './room-seven.component';

describe('RoomSevenComponent', () => {
  let component: RoomSevenComponent;
  let fixture: ComponentFixture<RoomSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomSevenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
