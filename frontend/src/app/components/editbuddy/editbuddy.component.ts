import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskBuddy } from 'src/app/models/taskbuddy';
import { TaskBuddyService } from 'src/app/services/taskbuddy.service';

@Component({
  selector: 'app-editbuddy',
  templateUrl: './editbuddy.component.html',
  styleUrls: ['./editbuddy.component.css']
})
export class EditBuddyComponent implements OnInit {
  @Input() buddy? : TaskBuddy;
  @Output() buddiesUpdated = new EventEmitter<TaskBuddy[]>();
  
  constructor(private taskBuddyService: TaskBuddyService) { }

  ngOnInit(): void {
  }

  updateBuddy(buddy: TaskBuddy){
    this.taskBuddyService.updateBuddy(buddy).subscribe((buddies: TaskBuddy[]) => this.buddiesUpdated.emit(buddies));
  }

  deleteBuddy(buddy: TaskBuddy){
    this.taskBuddyService.deleteBuddy(buddy).subscribe((buddies: TaskBuddy[]) => this.buddiesUpdated.emit(buddies));
  }

  createBuddy(buddy: TaskBuddy){
    this.taskBuddyService.createBuddy(buddy).subscribe((buddies: TaskBuddy[]) => this.buddiesUpdated.emit(buddies));
  }

}
