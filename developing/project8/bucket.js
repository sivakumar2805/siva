const { ObjectId } = require('mongodb');
const mongoDB = require('./mongoDB');

const bucket = async (req, res, next) => {
  try {
    const getmongoDB = await mongoDB();
    const aggPipe = [
      {
        $bucket: {
          groupBy: '$address.rollno',
          boundaries: [1, 6],
          default: 'Students-School-Names',
          output: {
            nativePlace: { $push: '$details.schoolname' },
          },
        },
      },
    ];
    const data = await getmongoDB
      .collection('testing')
      .aggregate(aggPipe)
      .toArray();
    console.log('data', data[0].nativePlace);

    res.status(200).json({ status: 200, data });
  } catch (err) {
    console.log('error', err);
  }
};

const bucket2 = async (req, res, next) => {
  try {
    const getmongoDB = await mongoDB();
    const aggPipe = [
      {
        // $bucket: {
        //   groupBy: '$address.rollno',
        //   boundaries: [1, 6],
        //   default: 'Students-School-Names',
        //   output: {
        //     nativePlace: { $push: '$details.schoolname' },
        //   },
        // },
        $bucket: {
          groupBy: '$age',
          boundaries: [100, 2000],
          default: 'Students-School-Names',
          output: {
            nativePlace: { $addToSet: { ADDRESS: '$address' } },
          },
        },
      },
    ];
    const data = await getmongoDB
      .collection('testing')
      .aggregate(aggPipe)
      .toArray();
    console.log('data', data[0].nativePlace[0].ADDRESS);
    console.log('Inserted Data', data);
    res.status(200).json({ status: 200, data });
  } catch (err) {
    console.log('error', err);
  }
};

module.exports = { bucket, bucket2 };
