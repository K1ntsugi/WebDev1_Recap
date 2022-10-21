const artists = [{
    name: 'Nick Cave',
    albums: [{
        title: 'Push the Sky Away'
      },
      {
        title: 'No more shall we part'
      }
    ]
  },
  {
    name: 'Ben Harper',
    albums: [{
        title: 'Live from Mars'
      },
      {
        title: 'The Will to Live'
      }
    ]
  }
];

// Imperativ
let totalNumberOfAlbums = 0;
for (let i = 0, l = artists.length; i < l; i++) {
  totalNumberOfAlbums += artists[i].albums.length;
}
console.log(totalNumberOfAlbums);

// Funktional
console.log("*********************************************");
const albumNums = artists.reduce(
    (result, artist, index, artists) => {
      return result + artist.albums.length;
    },
    0
  );

console.log(albumNums);
