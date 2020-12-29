import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpFormGroup: FormGroup;
  newUser: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.signUpFormGroup = this.formBuilder.group({
      newUser: this.formBuilder.group({
        name: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required])
      })
    });
  }

  onSubmit() {
    // todo add checking
    console.log('Creating new user');
    const name = this.signUpFormGroup.get('newUser.name').value;
    const surname = this.signUpFormGroup.get('newUser.surname').value;
    const email = this.signUpFormGroup.get('newUser.email').value;
    console.log(`Name: ${name}, surname: ${surname}, email: ${email}`);

    const newUser = new User(name, surname, email);
    console.log(`user name: ${newUser.name}`);
    this.userService.save(newUser).subscribe(result => {
      this.newUser = result;
    });
  }
}
