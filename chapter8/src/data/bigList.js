import { faker } from '@faker-js/faker';

export const bigList = [...Array(5000)].map(() => ({
  name: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));