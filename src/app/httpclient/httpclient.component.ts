import { Component, OnInit } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css'],
})
export class HttpclientComponent implements OnInit {
  pageTitle: String = 'Example HTTP Service';

  todos: any;
  constructor(private httpclientList: HttpclientService) {}

  ngOnInit(): void {
    this.httpclientList
      .getUsersfromServer()

      .pipe(map((todos: any) => todos.filter((todo) => todo.completed)))

      .subscribe((data: any) => {
        this.todos = data;
      });
  }
}
