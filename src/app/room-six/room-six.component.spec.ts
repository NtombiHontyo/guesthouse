import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSixComponent } from './room-six.component';

describe('RoomSixComponent', () => {
  let component: RoomSixComponent;
  let fixture: ComponentFixture<RoomSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomSixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
