import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})

export class Toastr {
  constructor(private toast: ToastrService) {
  }
  success(message:string) {
    this.toast.success(message);
  }
  error(message:string) {
    this.toast.error(message, "null", {enableHtml: true});
  }
  showResponseErrors = (resp:any) => {
    try {
      const errors = resp.error.error || resp.error.message || ['Something went wrong try again later'];
      this.toast.error(errors, "null", {enableHtml: true});
    } catch (ex) {
      this.toast.error('Something went wrong try again later');
    };
  }
}
