import { Component } from '@angular/core';
import { TaskBuddy } from './models/taskbuddy';
import { TaskBuddyService } from './services/taskbuddy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskBuddy.UI';
  buddies: TaskBuddy[] = [];
  buddyToEdit?: TaskBuddy;

  constructor(private taskBuddyService: TaskBuddyService) {}
  
  ngOnInit(): void {
    this.taskBuddyService.getTaskBuddy().subscribe((result: TaskBuddy[]) => (this.buddies = result));
  }
  /*  Manual Data injection of task */
  // ngOnInit(): void {
  //   this.buddies = this.taskBuddyService.getTaskBuddy();
  //   console.log(this.buddies);
  // }
  updateBuddyList(buddies: TaskBuddy[]){
    this.buddies = buddies;
  }

  initNewBuddy() {
    this.buddyToEdit = new TaskBuddy();
  }

  editBuddy(buddy: TaskBuddy) {
    this.buddyToEdit = buddy;
  }
}
