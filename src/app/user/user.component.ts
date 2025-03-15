import { Component, Output, Input, EventEmitter, input } from '@angular/core';

// type user = {
//   id : string , 
//   name : string
//   avatar : string , 
// }

interface user {
  id : string , 
  name : string
  avatar : string , 
}


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input( { required : true } ) user! : user ;
  @Output() select = new EventEmitter();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
