const languages = [];

// function favouriteLanguage() {
//   setTimeout(() => {
//     languages.push("javascript", "c", "c++", "java", "python");
//     console.log("Languages are added to the array\n");

//     setTimeout(() => {
//       console.log(languages);  

//       setTimeout(() => {
//         const randomIndex = Math.floor(
//           Math.random() * (languages.length - 1 - 0) + 0
//         );
//         console.log(
//           `\nFavourite Language of the day : ${languages[randomIndex]}`
//         );
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }

// favouriteLanguage();

// Promises

const addLanguageToArray = new Promise((resolve, reject) => {
  setTimeout(() => {
    languages.push("javascript", "c", "c++", "java", "python");
    resolve("Languages are added to the array\n");
  }, 2000);
});

const displaylanguages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(languages);
    }, 2000);
  });
};

addLanguageToArray
  .then((result) => {
    console.log(result);
    return displaylanguages();
  })
  .then((languages) => {
    console.log(languages);
  })
  .catch((err) => {
    console.log("there is error");
    console.log(err);
  })
  .finally(() => {
    console.log("Finally is running");
  });
