import { Injectable } from '@angular/core';
import { Task } from './';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  readonly STORAGE_NAME: string = 'tasks';

  constructor() { }

  /**
   * Return all tasks from Local Storage.
   *
   * @return {array} - Array of Tasks
   */
  getAll(): Task[] {
    const tasks = localStorage[this.STORAGE_NAME];
    return tasks ? JSON.parse(tasks) : [];
  }

  /**
   * Add a new task to Local Storage.
   *
   * @param {object} task - A Task
   * @return {void}
   */
  add(task: Task): void {
    const tasks = this.getAll();
    task.id = new Date().getTime();
    tasks.push(task);
    this.save(tasks);
  }

  /**
   * Search for a Task by its ID and return it (if found).
   *
   * @param {number} id - Task ID
   * @return {object} - A Task
   */
  findById(id: number): Task {
    const tasks: Task[] = this.getAll();
    return tasks.find(task => task.id === id);
  }

  /**
   * Update a task in the Local Storage.
   *
   * @param {object} task - A Task
   * @return {void}
   */
  update(task: Task): void {
    const tasks: Task[] = this.getAll();
    tasks.forEach((item, index, tasks) => {
      if (task.id === item.id) {
        tasks[index] = task;
      }
    });
    this.save(tasks);
  }

  /**
   * Delete a task from Local Storage.
   *
   * @param {number} id - Task ID
   * @return {void}
   */
  delete(id: number): void {
    let tasks: Task[] = this.getAll();
    tasks = tasks.filter(task => task.id !== id);
    this.save(tasks);
  }

  /**
   * Toggle the status (DONE) of a Task (TRUE or FALSE).
   *
   * @param {number} id - Task ID
   * @return {void}
   */
  toggleStatus(id: number): void {
    const tasks: Task[] = this.getAll();
    tasks.forEach((item, index, tasks) => {
      if (item.id === id) {
        tasks[index].done = !item.done;
      }
    });
    this.save(tasks);
  }

  /**
   * Save the list of Tasks in the Local Storage.
   *
   * @param {array} tasks - List of Tasks
   * @return {void}
   */
  private save(tasks: Task[]):void {
    localStorage[this.STORAGE_NAME] = JSON.stringify(tasks);
  }
}
