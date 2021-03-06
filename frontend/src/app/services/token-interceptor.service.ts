import { Injectable, Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {
    const userservice = this.injector.get(UserService);
    const tokenizedReq = req.clone(
      {
       headers: req.headers.set('authorization', 'bearer ' + userservice.getToken())
      }
    );
    return next.handle(tokenizedReq);
  }

}
