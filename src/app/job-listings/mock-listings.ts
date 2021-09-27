import { Listing } from './listing-card/listing.model';

let rightNow = new Date();
let currentDate = rightNow.toLocaleDateString("en-US")

export const mock_listings: Listing[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'WVU',
    location: 'West Virginia, USA',
    zipcode: 26505,
    type: 'In-person',
    requirements: 'CS Degree',
    date: currentDate,
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Apple',
    location: 'San Fransisco',
    zipcode: 95014,
    type: 'Remote',
    requirements: 'CS Degree',
    date: currentDate,
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'WVU Health',
    location: 'West Virginia, USA',
    zipcode: 26506,
    type: 'In-person',
    requirements: "Bachelor's Degree",
    date: currentDate,
  },
  {
    id: 4,
    title: 'Overworked Developer',
    company: 'Leidos',
    location: 'West Virginia, USA',
    zipcode: 26504,
    type: 'In-person/Remote',
    requirements: "Bachelor's Degree",
    date: currentDate,
  },
  {
    id: 5,
    title: 'Frontend Developer',
    company: 'WVU',
    location: 'West Virginia, USA',
    zipcode: 26505,
    type: 'In-person',
    requirements: 'CS Degree',
    date: currentDate,
  },
];
