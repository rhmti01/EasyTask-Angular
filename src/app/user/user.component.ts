import { Component, Output, Input, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  get imagePath(): string {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
}
