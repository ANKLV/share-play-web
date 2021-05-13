import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionAPI } from '../../api';
import { Toastr } from "../../providers"

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  @Output() onCreate = new EventEmitter<any>();
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private sessionAPI: SessionAPI, private router: Router, private toastr: Toastr) { }

  loginUser() {
    this.sessionAPI.create(this.loginForm.value).subscribe((data) => {
      this.onCreate.emit(data);
      this.toastr.success("Logged In");
      this.router.navigate(['/playlists']);
    }, (error) => {
      console.log('error', error);
      this.toastr.showResponseErrors(error)
    })
  }

}
