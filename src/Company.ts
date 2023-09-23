import { faker } from "@faker-js/faker"
import { CustomLocation } from "./Location"

export class Company {
  name: string
  catchPhrase: string
  location: CustomLocation

  constructor() {
    this.name = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude()
    }
  }
}