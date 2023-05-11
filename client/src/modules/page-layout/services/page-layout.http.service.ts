import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as process from "process";
import { MainHttpService } from "../../../shared/services/main.http.service";

@Injectable()
export class PageLayoutHttpService extends MainHttpService {
  registration(form: any) {
    const query = `
      mutation createUser($userData: UserInput) {
        createUser(input: $userData) {
          email, username, created
        }
      }
    `;
    const variables = { userData: { ...form, created: 1 } };
    return this.graphQlPostRequest(query, variables);
  }
}
