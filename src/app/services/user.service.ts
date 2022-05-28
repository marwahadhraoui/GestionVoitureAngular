import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/User.model";
import { Observable } from 'rxjs';
import { apiURLUser } from "../config";
import { Injectable } from '@angular/core';
import { Role } from './../model/Role.model';
import { apiURLRole, apiURLRoles } from './../config';
import { RoleWrapper } from './../model/RoleWrapped.model';

const httpOptions = {

    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class UserService {

    users: User[];
    user : User;


    constructor(private http: HttpClient) {

    }

    listeUser(): Observable<User[]> {
        return this.http.get<User[]>(apiURLUser);
    }

    supprimerUser(id: number) {
        const url = `${apiURLUser}/${id}`;
        return this.http.delete(url, httpOptions);
      }

     consulterUser(id: number): Observable<User> {
        const url = `${apiURLUser}/${id}`;
        return this.http.get<User>(url);
      }

      /*consulterUser(id:number): User{
        this.user = this.users.find(u => u.user_id == id)!;
        return this.user;
        }*/

        updateUser(u: User): Observable<User> {
            return this.http.put<User>(apiURLUser, u, httpOptions);
          }

          listeRoles():Observable<RoleWrapper>{
            return this.http.get<RoleWrapper>(apiURLRole);
            }

        getRole(id:number): Observable<Role>{
            const url = `${apiURLRoles}/${id}`;
            return this.http.get<Role>(url);
        }

        ajouterUser( u: User):Observable<User>{
            return this.http.post<User>(apiURLUser, u, httpOptions);
            }
}