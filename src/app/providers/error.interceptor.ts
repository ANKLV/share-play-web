import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})

export class ErrorInterceptor implements HttpInterceptor {
  constructor(private auth: Auth,
              private router: Router,
              private location: Location,
              private toastr: ToastrService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(this.handleError));
  }
  private handleError = (err: HttpErrorResponse) => {
    if (err.status == 401) {
      this.auth.signOut();
      this.router.navigate(['/login']);
      return throwError(err);
    } else if (err.status == 403) {
      this.location.back();
      this.toastr.error('You cannot perform this action');
      return throwError(err);
    }
    return throwError(err);
  }
}
