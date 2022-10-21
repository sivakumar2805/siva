const getmongoDB = require('./mongoDB');

const remove_AllCollections = async () => {
  const mongoDB = await getmongoDB();
  const mapData = await mongoDB.listCollections().toArray();
  console.log('mapData', mapData);
  mapData.map((element) => {
    console.log('Element', element);
    const { name } = element;
    console.log('Collection Name is', name);
    mongoDB
      .collection(name)
      .drop({})
      .then((data) => {
        console.log('Data', data);
      });
  });

  //   console.log('Data', data);
};

module.exports = {
  remove_AllCollections,
};
