const objArray = [
  {
    id: 1,
    name: 'Вася',
  },
  {
    id: 2,
    name: 'Петя',
  },
  {
    id: 1,
    name: 'Вася',
  },
];

const uniqueArray = [...new Set(objArray.map((item) => item.id))].map((id) => {
  return objArray.find((item) => item.id === id);
});

console.log(uniqueArray);
