import { Task, Deadline, MonitoredClass } from './types';

export const TASKS: Task[] = [
  {
    id: '1',
    title: 'Advanced Calculus: Fourier Series Problem Set',
    description: 'Complete Exercises 4.1 through 4.9 focusing on periodic functions.',
    dueTime: '2:00 PM',
    priority: 'urgent',
    completed: false,
    attachments: 2,
    group: 'MS Teams: Math 402 Group'
  },
  {
    id: '2',
    title: 'Digital Humanities Research Abstract',
    description: 'Refine the 300-word abstract for the upcoming symposium on algorithmic bias.',
    dueTime: '5:00 PM',
    priority: 'high',
    completed: false,
    tags: ['Drafting Phase'],
    group: 'Shared on OneDrive'
  },
  {
    id: '3',
    title: 'Renaissance Art History: Reading Response',
    description: "Analyze Vasari's 'Lives' concerning the evolution of technique.",
    dueTime: '9:00 AM',
    priority: 'pending',
    completed: true
  }
];

export const DEADLINES: Deadline[] = [
  {
    id: '1',
    date: '26',
    month: 'Oct',
    day: 'Mon',
    title: 'Final Essay Thesis',
    course: 'Comparative Lit 102',
    type: 'critical'
  },
  {
    id: '2',
    date: '28',
    month: 'Oct',
    day: 'Wed',
    title: 'Mid-term Quiz',
    course: 'Macroeconomics',
    type: 'normal'
  },
  {
    id: '3',
    date: '12',
    month: 'Nov',
    day: 'Tue',
    title: 'History of Art Gallery Review',
    course: 'Art History 402',
    type: 'critical'
  }
];

export const CLASSES: MonitoredClass[] = [
  {
    id: '1',
    code: 'AR',
    name: 'Architecture 101: Modernism',
    channel: 'General-Assignments',
    syncsToday: 12,
    color: 'text-primary'
  },
  {
    id: '2',
    code: 'PH',
    name: 'Advanced Physics II',
    channel: 'Lab-Reports-Feed',
    syncsToday: 3,
    color: 'text-tertiary'
  },
  {
    id: '3',
    code: 'CR',
    name: 'Creative Writing: Narrative',
    channel: 'Weekly-Prompts',
    syncsToday: 8,
    color: 'text-secondary'
  }
];
