const arr = [
  {
    key1: 'value1',
    key2: 'value2',
    key3: [
      {
        nested: ['order', 'bills'],
      },
    ],
    key4: [
      {
        key5: [
          {
            key6: 'value3',
            key7: [
              {
                key8: 'value4',
              },
              {
                key9: 'value5',
              },
            ],
          },
        ],
      },
    ],
  },
];

const data = arr.filter((e) => {
  e.key4.filter((e) => {
    e.key5.filter((e) => {
      e.key7.filter((e) => {
        console.log(e.key8);
      });
    });
  });
});

const data2 = arr.map((e) => {
  e.key4.map((e) => {
    e.key5.map((e) => {
      e.key7.map((e) => {
        console.log(e.key8);
      });
    });
  });
});
