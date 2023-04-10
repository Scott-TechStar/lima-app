import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';


import { AuthService } from '../auth/auth.service';
import { PostsService } from '../posts/posts.services';
import { Posts } from '../posts/posts.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    error = new Subject<string>();
  constructor(
    private http: HttpClient,
    private postsService: PostsService,
    private authService: AuthService
  ) {}

  storePosts(title: string, content: string){
    const postData: Posts = {title:title, content: content};
      // Send Http request
  this.http
  .post<{name: string}>(
    'https://lima-90bd0-default-rtdb.firebaseio.com/posts.json',
    postData
  )
  .subscribe(responseData => {
    console.log(responseData);
  }, error =>{
    this.error.next(error.message);
  });
  }

 //fetching the posts
 fetchPosts(){
    return this.http
    .get<{[key: string]: Posts}>(
      'https://lima-90bd0-default-rtdb.firebaseio.com/posts.json'
    )
    .pipe(map(responseData => {
      const postsArray: Posts[] = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id: key});
        }
      }
      return postsArray;
    }));
  }
}
