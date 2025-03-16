import { Component, Output, Input, EventEmitter, input } from '@angular/core';
import { type user } from "./user.model";


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input( { required : true } ) user! : user ;
  @Input( {required:true} ) selected! : boolean;
  @Output() select = new EventEmitter();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
