import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearingCardComponent } from './learing-card.component';

describe('LearingCardComponent', () => {
  let component: LearingCardComponent;
  let fixture: ComponentFixture<LearingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
