import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  createTask() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateAllTask() {}
  /* eslint-disable @typescript-eslint/no-empty-function */
  deleteTask() {}
}
