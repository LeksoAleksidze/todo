import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-header',
  templateUrl: './add-header.component.html',
  styleUrls: ['./add-header.component.scss'],
})
export class AddHeaderComponent implements OnInit {
  @Output() sendTodoObj: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getInfo(inputValue?: string) {
    const selectedValue = document.querySelector('select')!.value;
    if (inputValue !== '' && selectedValue !== '') {
      const objPattern: Task = {
        text: inputValue!,
        status: selectedValue!,
      };
      this.sendTodoObj.emit(objPattern);
      document.querySelector('select')!.selectedIndex = 0;
      document.querySelector('input')!.value = '';
    } else {
      alert('შეიყვანეთ თასქის აღწერა');
    }
  }
}

interface Task {
  text: string;
  status: string;
}
