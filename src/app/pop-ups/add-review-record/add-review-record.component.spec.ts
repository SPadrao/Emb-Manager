import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewRecordComponent } from './add-review-record.component';

describe('AddReviewRecordComponent', () => {
  let component: AddReviewRecordComponent;
  let fixture: ComponentFixture<AddReviewRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddReviewRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddReviewRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
