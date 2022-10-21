// async function a() {
//   console.log('a');
// }

// async function b() {
//   a();
//   console.log('b');
// }
// async function c() {
//   b();
//   console.log('c');
// }
// async function d() {
//   c();
//   console.log('d');
// }

// d();

/**async function Fna(name) {
  console.log('a');
  await Fnb({ name });
}

async function Fnb(bparam) {
  const { name } = bparam;
  console.log('b');
  console.log(`i'm ${name}`);
}
Fna('siva');*/

const alpha = async (name) => {
  const beta = async (name) => {
    await alpha();
    const gaama = async (name) => {
      await beta();
      console.log(`i am ${name}`);
    };
  };
};

const log = alpha('siva');
console.log(log);
