import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/Domains/users';
import { UsersService } from 'src/app/Services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  name!:string;
  user!: Users;
  user$! :Observable<Users>;
  
constructor(private userservice: UsersService,
  private activatedRoute: ActivatedRoute,
  private router:Router){
    this.name = String(this.activatedRoute.snapshot.paramMap.get('name'));
}

ngOnInit(){
  //this.getInspectionById();
  this.user$ = this.userservice.getUsersName(this.name);
 }
 getUsersById(){
  /* return this.inspectiontypeservice.getInspectionTypebyId(this.id).subscribe(data=>{
     this.inspeccion = data;
   })*/
   }
}
