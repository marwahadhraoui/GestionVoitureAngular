import { Component, OnInit } from '@angular/core';
import { User } from './../model/User.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Role } from './../model/Role.model';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',

})
export class UpdateUserComponent implements OnInit {
  currentUser = new User();
  updatedRoleId!: number;
  roles!: Role[];
  //users: User[];
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    // this.chargerUsers();

    this.userService.listeRoles().
      subscribe(r => {
        this.roles = r._embedded.roles;
        console.log(r);
      });

    this.userService.consulterUser(this.activatedRoute.snapshot.params['id']).
      subscribe(u => {
        this.currentUser = u;
        console.log(this.roles)
        this.updatedRoleId = this.currentUser.roles[0].idRole;

      });


  }

  updateUser() {
    
    
    //this.currentUser.roles = this.roles.find(r => r.idRole == this.updatedRoleId)!;


    this.userService.updateUser(this.currentUser).subscribe(u => {
      this.router.navigate(['users']);
    }
    );
  }


}











