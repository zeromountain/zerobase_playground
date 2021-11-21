const getDay = date =>
  ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][
    new Date(date).getDay()
  ];

module.exports = getDay;
