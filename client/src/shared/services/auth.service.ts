import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MainHttpService } from "./main.http.service";

@Injectable({
  providedIn: "root",
})
export class AuthService extends MainHttpService {
  checkAuth(token: string) {
    this.graphQlGetRequest();
  }
}
