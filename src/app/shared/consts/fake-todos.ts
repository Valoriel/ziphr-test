import { TodoPriority } from '../enums/todo-priority';
import { Todo } from '../interfaces/todo';

/** List of fake todos for testing. */
export const FakeTodos: Todo[] = [
  {
    title: 'I was made for lovin\' you, baby',
    date: Date.now(),
    priority: TodoPriority.HIGH,
    done: false,
  },
  {
    title: 'You were made for lovin\' me',
    date: Date.now(),
    priority: TodoPriority.NORMAL,
    done: false,
  },
  {
    title: 'And I can\'t get enough of you, baby',
    date: Date.now(),
    priority: TodoPriority.LOW,
    done: false,
  },
  {
    title: 'Can you get enough of me?',
    date: Date.now(),
    priority: TodoPriority.HIGH,
    done: true,
  },
  {
    title: 'Delete ABC module completely',
    date: Date.now(),
    priority: TodoPriority.NORMAL,
    done: false,
  },
];
