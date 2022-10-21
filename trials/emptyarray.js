const fn = ({ isadmin }) => {
  if (!isadmin) {
    return [];
  }
};

const a = fn({ isadmin: false });
console.log('a', a);
