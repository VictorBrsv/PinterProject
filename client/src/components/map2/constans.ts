export const center = [55.75393, 37.621558];

export const places = [
  {
    id: 1,
    coordinate: [55.743611, 37.653889],
    name: 'Московский театр на Таганке',
  },
  {
    id: 2,
    coordinate: [55.764105, 37.656164],
    name: 'Довлатов',
    time: '12:00-24:00 Каждый день',
  },
  {
    id: 3,
    coordinate: [55.758471, 37.659687],
    name: 'Torro Grill',
    time: '12:00-00:00 Каждый день',
  },
  {
    id: 4,
    coordinate: [55.778244, 37.587355],
    name: 'Jazz Evening',
    time: '20:00 2024-02-25',
  },
  {
    id: 5,
    coordinate: [55.760532, 37.619825],
    name: 'Большой театр',
    time: '19:00-23:00 Каждый день',
  },
  {
    id: 6,
    coordinate: [55.813798, 37.633858],
    name: 'Суши мастер',
    time: '10:00-22:00 Каждый день',
  },
  {
    id: 7,
    coordinate: [55.741643, 37.652854],
    name: 'Стимпанк бар',
    time: '18:00-02:00 Каждый день',
  },
];

export const images = [...Array(26)].map((_, i) => {
  const letter = String.fromCharCode(i + 97);
  return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
});
