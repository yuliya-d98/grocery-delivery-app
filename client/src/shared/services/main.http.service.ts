import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MainHttpService {
  constructor(private http: HttpClient) {}
  // https://www.apollographql.com/blog/graphql/basics/making-graphql-requests-using-http-methods/
  graphQlGetRequest<T = any>(
    query: string,
    operationName?: string
  ): Observable<T> {
    // in GET no mutations allowed, just query
    return this.http.get<T>(`http://localhost:4000/graphql`, {
      params: {
        query,
        ...(operationName && { operationName }),
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  graphQlPostRequest<T = any>(
    queryOrMutation: string,
    variables?: Object,
    operationName?: string
  ): Observable<T> {
    const body = {
      query: queryOrMutation,
      variables,
      ...(operationName && { operationName }),
    };
    return this.http.post<T>(`http://localhost:4000/graphql`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
