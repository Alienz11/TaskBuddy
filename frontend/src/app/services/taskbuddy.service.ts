import { Injectable } from '@angular/core';
import { TaskBuddy } from '../models/taskbuddy';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TaskBuddyService {

  private url = "TaskBuddy"
  constructor(private http: HttpClient) { }

  public getTaskBuddy() : Observable<TaskBuddy[]> {
    return this.http.get<TaskBuddy[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateBuddy(buddy: TaskBuddy) : Observable<TaskBuddy[]> {
    return this.http.put<TaskBuddy[]>(`${environment.apiUrl}/${this.url}`, buddy);
  }

  public createBuddy(buddy: TaskBuddy) : Observable<TaskBuddy[]> {
    return this.http.post<TaskBuddy[]>(`${environment.apiUrl}/${this.url}`, buddy);
  }

  public deleteBuddy(buddy: TaskBuddy) : Observable<TaskBuddy[]> {
    return this.http.delete<TaskBuddy[]>(`${environment.apiUrl}/${this.url}/${buddy.id}`);
  }
}

/* Manual Data injection of task */
//   public getTaskBuddy() : TaskBuddy[] {
//     let buddy = new TaskBuddy();
//     buddy.id = 1;
//     buddy.priority = "High";
//     buddy.task = "Learning C# and Angular";
//     buddy.setDate = "10/10/2022";
//     buddy.dueDate = "10/11/2022";

//     return [buddy];
//   }
// }
