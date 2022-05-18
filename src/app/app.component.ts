import { Component, OnInit } from '@angular/core';

import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public tasks: Array<any> = [];

  constructor(private _tasks: TasksService) {}

  ngOnInit(): void {
    this._tasks.getTasks()
      .subscribe({
        next: (response) => this.tasks = response.data,
        error: (err) => alert('Ocurrió un error')
      });
  }

}
