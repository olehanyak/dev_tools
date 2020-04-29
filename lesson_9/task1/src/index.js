import printProfile from './renderProfile';

const userData = {
  name: 'Tom',
  age: 17,
};

const profile = {
  ...userData,
  company: 'Gromcode',
};

printProfile(profile);

// console.log(profile);


const a = 12;

if (a === 11) {
  alert('yes'); // eslint-disable-line no-alert
}
