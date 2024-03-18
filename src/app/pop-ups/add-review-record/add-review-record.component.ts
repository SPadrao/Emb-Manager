import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-review-record',
  templateUrl: './add-review-record.component.html',
  styleUrl: './add-review-record.component.css'
})

export class AddReviewRecordComponent {
  @Input() show: boolean = false;
  @Output() hide = new EventEmitter<boolean>();

  reviewRecordInput !: string;

  isEmpty() {
    return (!this.reviewRecordInput || this.reviewRecordInput.trim() === "");
  }
  setHide() {
    this.hide.emit(this.show);
  }
}