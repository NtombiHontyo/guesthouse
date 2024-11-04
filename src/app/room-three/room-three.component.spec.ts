import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomThreeComponent } from './room-three.component';

describe('RoomThreeComponent', () => {
  let component: RoomThreeComponent;
  let fixture: ComponentFixture<RoomThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
