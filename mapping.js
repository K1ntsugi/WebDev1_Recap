const bla = [{name:'a'},{name:'b'},{name:'c'}];

const my_arr = [];
for (let i = 0; i < bla.length; i++) {
   my_arr.push(bla[i]);
}

console.log(bla);

const artists = [{
    name: 'Nick Cave'
  },
  {
    name: 'Ben Harper'
  }
];
const names = artists.map(
  (artist, index, artists) => artist.name
);
console.log(names);
