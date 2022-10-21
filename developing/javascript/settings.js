const displayFn = () => {
  console.log('Display');
};

const updateFn = () => {
  console.log('Update');
};
const buttonEnable = async () => {
  // [console.log(displayFn()), console.log(updateFn())]
  const data = await displayFn();
};

const settingsButton = (button) => {
  if (button === true) {
    console.log(buttonEnable);
  } else {
    return false;
  }
};

settingsButton(true);
