import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-tasks',
  templateUrl: './todos-tasks.component.html',
  styleUrls: ['./todos-tasks.component.scss'],
})
export class TodosTasksComponent implements OnInit {
  constructor() {}

  htmlTask: Task[] = [];
  htmlTasKInProgress: Task[] = [];
  htmlTasKDone: Task[] = [];

  ngOnInit(): void {
    this.getData();
  }

  ngDoCheck() {
    this.getData();
  }

  // თასქის დამატება
  addNewTask(data: Task) {
    let alreadyData = JSON.parse(localStorage.getItem('todo-add')!);
    if (!alreadyData) {
      alreadyData = new Array();
    }
    alreadyData.push(data);
    localStorage.setItem('todo-add', JSON.stringify(alreadyData));
  }

  // ინფორმაციის აღება
  getData() {
    // To-Do
    if (JSON.parse(localStorage.getItem('todo-add')!)) {
      this.htmlTask = JSON.parse(localStorage.getItem('todo-add')!);
    } else {
      this.htmlTask = [];
    }

    // In-Progress
    if (JSON.parse(localStorage.getItem('todo-in-progress')!)) {
      this.htmlTasKInProgress = JSON.parse(
        localStorage.getItem('todo-in-progress')!
      );
    } else {
      this.htmlTasKInProgress = [];
    }
    // Done
    if (JSON.parse(localStorage.getItem('todo-done')!)) {
      this.htmlTasKDone = JSON.parse(localStorage.getItem('todo-done')!);
    } else {
      this.htmlTasKDone = [];
    }
  }

  //  თასქის ამოშლა
  deleteItem(e: number) {
    let alreadyData = JSON.parse(localStorage.getItem('todo-add')!);
    alreadyData.splice(e, 1);
    localStorage.setItem('todo-add', JSON.stringify(alreadyData));
  }

  // გადატანა - გადმოტანა
  moveNext(e: number, dir: string, back?: string) {
    let dirStr: string = '';
    if (dir === 'todo-in-progress') {
      dirStr = 'todo-add';
    }
    if (dir === 'todo-done') {
      dirStr = 'todo-in-progress';
    }
    if (back === 'left') {
      dirStr = 'todo-done';
    }
    if (back === 'left-add') {
      dirStr = 'todo-in-progress';
    }

    let alreadyExist = JSON.parse(localStorage.getItem(dirStr)!);
    const spliceItem = alreadyExist.splice(e, 1);
    localStorage.setItem(dirStr, JSON.stringify(alreadyExist));
    let alreadyInprogress = JSON.parse(localStorage.getItem(dir)!);
    if (alreadyInprogress) {
      alreadyInprogress.push(spliceItem[0]);
      localStorage.setItem(dir, JSON.stringify(alreadyInprogress));
    } else {
      console.log(spliceItem);
      localStorage.setItem(dir, JSON.stringify(spliceItem));
    }
  }
}

interface Task {
  text: string;
  status: string;
}
