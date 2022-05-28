import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',

})
export class UsersComponent implements OnInit {
  searchText: String;
  users: User[];
  constructor(private userService: UserService, public authService: AuthService) {
    this.userService.listeUser().subscribe(u => {
      console.log(u);
      this.users = u;
    });
  }

  ngOnInit(): void {
    this.chargerUsers();
  }
  chargerUsers() {
    this.userService.listeUser().subscribe(u => {
      console.log(u);
      this.users = u;
    });
  }

  supprimerUser(u: User) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.userService.supprimerUser(u.user_id).subscribe(() => {
        console.log("voiture supprimé");
        this.chargerUsers();
      });
  }

}
