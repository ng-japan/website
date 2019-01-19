import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableCardComponent } from './timetable-card.component';

describe('TimetableCardComponent', () => {
  let component: TimetableCardComponent;
  let fixture: ComponentFixture<TimetableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimetableCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
