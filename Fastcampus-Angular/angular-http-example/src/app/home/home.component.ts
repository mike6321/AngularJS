import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GithubService, GithubUser} from "../github.service";

// interface GithubUser {
//   login: string;
//   avatar_url: string;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: GithubUser[];

  // constructor(private http: HttpClient,
  //             @Inject('githubUrl') private githubUrl) {
  // }
  constructor(
    private githubService: GithubService
  ) {}

  async ngOnInit() {
    // this.http.get<GithubUser[]>(this.githubUrl)
    //           .toPromise()
    try {
      this.data = await this.githubService.getUser();
    } catch(error) {
      console.log(error);
    }
              // .then(data => {
              //                 this.data = data;
              //                 console.log(data);
              //               })
              // .catch(error => {
              //                   console.log(error);
              // });
  }

}
