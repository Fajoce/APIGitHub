import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/Domains/users';
import { UsersService } from 'src/app/Services/users.service';

const users: Users[] = [];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  displayedColumns: string[] = ['login', 'id','url','html_url','type','acciones'];
  dataSource = new MatTableDataSource<Users>(users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userservice: UsersService){}

  getAllUsers(){
    this.userservice.getUsers().subscribe(res =>{
      console.log(res);
      this.dataSource.data = res;
    });
  }
  ngOnInit(){
    this.getAllUsers();
    console.log(this.getAllUsers)
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }
}
