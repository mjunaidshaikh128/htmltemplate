import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'users';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private userservice: UserService) {}

  onSubmit(data: Users) {
    this.userservice.setUser(data).subscribe((result) => console.log(result))
  }


}
