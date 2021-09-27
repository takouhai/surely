export class Listing {
  id: number;
  title: string;
  company: string;
  location: string;
  zipcode: number;
  type: string;
  requirements: string;
  date: string;

  constructor({
    id,
    title,
    company,
    location,
    zipcode,
    type,
    requirements,
    date,
  }: {
    id: number;
    title: string;
    company: string;
    location: string;
    zipcode: number;
    type: string;
    requirements: string;
    date: string;
  }) {
    this.id = id;
    this.title = title;
    this.company = company;
    this.location = location;
    this.zipcode = zipcode;
    this.type = type;
    this.requirements = requirements;
    this.date = date;
  }
}
