import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface GithubUser {
  login: string;
  avatar_url: string;
}

@Injectable()
export class GithubService {

  constructor(private http: HttpClient,
              @Inject('githubUrl') private githubUrl) { }

  getUser() {
    return this.http.get<GithubUser[]>(this.githubUrl)
                    .toPromise();
  }
}
