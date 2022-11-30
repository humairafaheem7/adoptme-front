import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAdoptionComponent } from './events-adoption.component';

describe('EventsAdoptionComponent', () => {
  let component: EventsAdoptionComponent;
  let fixture: ComponentFixture<EventsAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsAdoptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
