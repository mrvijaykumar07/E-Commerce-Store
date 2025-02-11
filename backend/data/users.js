import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Vijay Kumar',
    email: 'kumarbijaybehera07@gmail.com',
    password: bcrypt.hashSync('Bijay@123', 10),
    isAdmin: true
  },
  {
    name: 'Sukumar Tripathy',
    email: 'sukumar@email.com',
    password: bcrypt.hashSync('Sukumar@123', 10),
    isAdmin: false
  },
  {
    name: 'Raja Naik',
    email: 'raja@email.com',
    password: bcrypt.hashSync('Raja@123', 10),
    isAdmin: false
  },
  {
    name: 'Shankar Pattnaik',
    email: 'shankar@gmail.com',
    password: bcrypt.hashSync('Shankar@123', 10),
    isAdmin: false
  },
  {
    name: 'Tanvir Pradhan',
    email: 'tanvir@email.com',
    password: bcrypt.hashSync('Tanvir@123', 10),
    isAdmin: false
  },
  {
    name: 'Amul Meher',
    email: 'amul@email.com',
    password: bcrypt.hashSync('Amulr@123', 10),
    isAdmin: false
  }

];

export default users;
