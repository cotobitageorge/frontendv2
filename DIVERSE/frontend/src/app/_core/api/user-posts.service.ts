import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserPostsFilters } from '../../_core/models/UserPost';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  private readonly resourceUrl:string="/UserPosts";
  private readonly baseUrl:string=environment.server;


  // url = localhost:54444/UserPosts?size=10&page=0
  constructor(private http:HttpClient) { }
  // getUserPosts(filters: UserPostsFilters) {
  //    const params: HttpParams = new HttpParams()
  //      .set('pageSize', filters.size.toString())
  //      .set('pageNumber', filters.page.toString())
  //      .set('sortType', filters.sortType.toString());
  //   return this.http.get(`${this.baseUrl}${this.resourceUrl}`, {params: params});
  // }

  // getUserPosts(){
  //   return this.http.get(`${this.baseUrl}${this.resourceUrl}`+"/GetAllPosts");
  // }
  getUserPosts(){
    return this.http.get(this.baseUrl+this.resourceUrl+"/GetAllPosts");
  }
  getPostsById(body){
    const params: HttpParams = new HttpParams().set("Id", body);
    return this.http.get(this.baseUrl+this.resourceUrl+"/GetPostsById", {params: params});
  }
  create(body){
      return this.http.post(this.baseUrl+this.resourceUrl+"/Create", body);
  }
  comment(body){
    return this.http.post(this.baseUrl+this.resourceUrl+"/Comment", body);
}
  getCommentById(body){
    const params: HttpParams = new HttpParams().set("Id", body);
    return this.http.get(this.baseUrl+this.resourceUrl+"/GetCommentById", {params: params});
  }

}
