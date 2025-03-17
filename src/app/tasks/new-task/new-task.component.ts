import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<newTaskData>();
  titleValue = ' ';
  summaryValue = ' ';
  selectedDate = ' ';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.create.emit({
      title: this.titleValue,
      summary: this.summaryValue,
      date: this.selectedDate,
    });
  }
}
