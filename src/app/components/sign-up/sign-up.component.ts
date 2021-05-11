import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAPI } from '../../api';
import { Toastr } from "../../providers"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @Output() onCreate = new EventEmitter<any>();
  userForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    nickname: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private userAPI: UserAPI, private toastr: Toastr) { }

  createUser() {
    this.userAPI.create({user: this.userForm.value}).subscribe((data) => {
      this.onCreate.emit(data);
      this.showSuccess();
    }, (error) => {
      console.log('error', error);
      this.toastr.showResponseErrors(error)
    })
  }

  showSuccess() {
    this.toastr.success("Registered");
  }
}
