import { Component, OnInit } from '@angular/core';
import { User } from './../model/User.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Role } from './../model/Role.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',

})
export class AddUserComponent implements OnInit {
  newUser = new User();
  roles : Role[];
  message: string;
  newIdRole!: number;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listeRoles().
      subscribe(r => {
        this.roles = r._embedded.roles;
        console.log(r);
      });
  }

  addUser(){
    this.userService.ajouterUser(this.newUser)
    .subscribe(u => {
    console.log(u);
    this.router.navigate(['users']);
    });
    }

  

}
