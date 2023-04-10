import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts.model';
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService{
  error = new Subject<string>();
    constructor(private http:HttpClient){}
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
//ddelete posts
    deletePosts(){
      return this.http.delete('https://lima-90bd0-default-rtdb.firebaseio.com/posts.json');
    }
}