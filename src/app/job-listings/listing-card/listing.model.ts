export class Listing {
  title: string;
  company: string;
  location: string;
  zipcode: number;
  type: string;
  requirements: string;
  date: string;

  constructor({
    title,
    company,
    location,
    zipcode,
    type,
    requirements,
    date,
  }: {
    title: string;
    company: string;
    location: string;
    zipcode: number;
    type: string;
    requirements: string;
    date: string;
  }) {
    this.title = title;
    this.company = company;
    this.location = location;
    this.zipcode = zipcode;
    this.type = type;
    this.requirements = requirements;
    this.date = date;
  }
}
