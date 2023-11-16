import {inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isLoggedIn()) {
      //If user is logged in it means the token is in place and can be added to any other request
      const token = this.authService.getToken()
      req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    }
    //Handle the request to the next handler
    return next.handle(req)
  }
}