import {Injectable} from '@angular/core'
import {jwtDecode, JwtHeader, JwtPayload} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JWTTokenService {
  constructor() {
  }

  getDecodedPayload(jwtToken: string) {
    if (jwtToken) {
      return jwtDecode<JwtPayload>(jwtToken)
    } else {
      return {}
    }
  }

  getDecodedHeader(jwtToken: string) {
    if (jwtToken) {
      return jwtDecode<JwtHeader>(jwtToken, {header: true})
    } else {
      return {}
    }
  }

  isTokenExpired(jwtToken: string) {
    const expiryDate = this.getDecodedPayload(jwtToken).exp
    if (expiryDate) {
      const currentTime = Math.floor(Date.now() / 1000)
      return expiryDate < currentTime
    } else {
      return true
    }
  }
}
