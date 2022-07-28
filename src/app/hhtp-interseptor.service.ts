import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpInterceptor} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HhtpInterseptorService implements HttpInterceptor{

  constructor() { }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    let tokenReq=request.clone({
      setHeaders:{
        authorization:"Bearer"+sessionStorage.getItem('token')
      }
    })
    return next.handle(tokenReq);
  }
}
