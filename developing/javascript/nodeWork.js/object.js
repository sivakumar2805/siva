db.collection.aggregate([
  {
    $addFields: {
      subjects: {
        $let: {
          vars: {
            firstMatchedIndex: {
              $arrayElemAt: [
                {
                  $arrayElemAt: [
                    {
                      $filter: {
                        input: {
                          $zip: {
                            inputs: [
                              '$subjects',
                              {
                                $range: [
                                  0,
                                  {
                                    $size: '$subjects',
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        cond: {
                          $eq: [
                            {
                              $arrayElemAt: ['$$this.name', 0],
                            },
                            'Maths',
                          ],
                        },
                      },
                    },
                    0,
                  ],
                },
                1,
              ],
            },
          },
          in: {
            $ifNull: [
              {
                $concatArrays: [
                  {
                    $slice: ['$subjects', '$$firstMatchedIndex'],
                  },
                  {
                    $slice: [
                      '$subjects',
                      {
                        $subtract: [
                          {
                            $add: ['$$firstMatchedIndex', 1],
                          },
                          {
                            $size: '$subjects',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              '$subjects',
            ],
          },
        },
      },
    },
  },
]);
