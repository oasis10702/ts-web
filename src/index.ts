import { User } from './models/User';

const user = new User({});

user.set({ name: 'new name' });

user.on('change', () => {});
user.on('change', () => {});
user.on('change', () => {});

console.log(user);
