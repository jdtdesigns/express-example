// const inquirer = require('inquirer');

// inquirer.prompt([
//   {
//     name: 'user_name',
//     message: 'Please type your name.'
//   }
// ]).then(() => {

// });

// const jdInquirer = {
//   prompt(questionArr) {
//     return new Promise((resolve, reject) => {
//       // resolve one the terminal inputs have all completed

//       // Loop over question array and prompt user in the terminal for each object in the array
//       const answers = {
//         something: 'Hey'
//       }

//       resolve(answers);
//     });
//   }
// };

// jdInquirer.prompt([
//   {
//     name: 'something',
//     message: 'Hi there.'
//   }
// ]).then((answersObj) => {
//   console.log(answersObj);
// });



Promise.all();

// const promiseOjb = new Promise();

function requestOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const url = '';

      if (url.length) {
        resolve(url);
      } else {
        reject('Some error occurred and we don\'t');
      }
    }, 7000);
  });
}

function requestTwo(passed_url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const somethingWithURL = passed_url + ' we did something';
      resolve(somethingWithURL);
    }, 4000);
  });
}

const starwarsRequest = requestOne();

// starwarsRequest
//   .then(requestTwo)
//   .then((something) => {
//     console.log(something);
//   })
//   .catch((err) => {
//     if (err.code === '300') {

//     }
//   });

// promObj
//   .then(() => {
//     console.log('hey, show me!');
//   })
//   .then(() => {
//     console.log('next thing');
//   })
//   .then(() => {
//     console.log('one more');
//   })
//   .catch((err) => {

//   });

class MyClass {
  someMethod() {
    console.log('my method');
  }

  static staticMethod() {
    console.log('static method!');
  }
}

const obj = new MyClass();

// obj.someMethod();


MyClass.staticMethod();