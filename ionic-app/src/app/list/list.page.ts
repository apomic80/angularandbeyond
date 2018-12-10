import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { IUser } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  providers: [ListService]
})
export class ListPage implements OnInit {
  users: Array<IUser>;

    constructor(private service: ListService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.service.getUsers()
            .subscribe((arg) => this.users = arg.results);
    }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
