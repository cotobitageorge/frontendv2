import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPostsFilters } from '../../_core/models/UserPost';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private firstNameSubject: Subject<string>=new Subject<string>();
//firstNameString:Observable<string>=this.firstNameSubject.asObservable();
filters: UserPostsFilters;

constructor(private http:HttpClient) { }

  addFirstName(firstName:string) {
    this.firstNameSubject.next(firstName);
  }

    private readonly resourceUrl:string="/User";
    private readonly baseUrl:string=environment.server;

 

    getUserById (body) {
        return this.http.get(this.baseUrl+this.resourceUrl+"/GetUsersById", body);
    }

    getAll() {
      return this.http.get(this.baseUrl+this.resourceUrl+"/GetAll");
    }
}
