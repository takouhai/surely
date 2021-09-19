import { Option } from './option';

let date: Option[] = [
  {
    id: 0,
    disabled: true,
    title: 'Date Posted',
    value: '',
    selected: true,
  },
  {
    id: 1,
    disabled: false,
    title: 'Last 24 hours',
    value: 'recent',
    selected: false,
  },
];

let remote: Option[] = [
  {
    id: 0,
    disabled: false,
    title: 'Remote',
    value: 'remote',
    selected: true,
  },
  {
    id: 1,
    disabled: false,
    title: 'Temporarily Remote',
    value: 'temp',
    selected: false,
  },
];

export const OPTIONS: any = [date, remote];
