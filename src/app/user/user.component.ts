import { Component , input, Input  } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
})
export class UserComponent {
  @Input({required:true}) avatar! : string ;
  @Input({required:true}) name! : string ;
  
  get imagePath(): string {
    return 'assets/users/' + this.avatar;
}

  onSelectUser() {  }
}
