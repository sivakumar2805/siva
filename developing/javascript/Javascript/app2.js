const books = [
  {
    title: 'harry potter',
    author: 'siva',
    rating: 4.2,
  },
  {
    title: 'doreamon',
    author: 'akash',
    rating: 5.2,
  },
  {
    title: 'chin chan',
    author: 'praveen',
    rating: 3.0,
  },
];

// books.forEach(function (book) {
//   console.log(book.title.toUpperCase());
// });

// books.forEach((book) => {
//   console.log(book.rating * 100);
// });

for (let book of books) {
  // console.log(book.title.toUpperCase());
  book.author.toString();
  console.log('book', book);
}

// const value = books.map((x) => {
//   return x.author;
// });

// console.log(value);

// const rfqDeleteTemplateVersionByVersionId = async (req, res, next) => {
//   const mongoDB = await getMongoDB();
//   const { GUID } = req;
//   const { versionid } = req.body.data;

//   const filter = {
//     createdby: GUID,
//     "version.versionid": versionid,
//   };

//   const data = await mongoDB
//     .collection("RFQTemplate")
//     .updateOne(filter, { $pull: { version: { versionid } } });
//   console.log("data☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶▬↨↑↓→←∟↔▲▼", data);
//   res.status(200).json({ status: 200, data });
// };

// const map = new Map();

// map.set('title', 'javascript');

// console.log(map);
