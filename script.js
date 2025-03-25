// const topSongs = [
//   {
//       title: "Psycho",
//       artist: "Baekhyun",
//       releaseDate: "2020-11-30",
//       album: "Delight",
//       duration: "3:29",
//       image: "https://example.com/psycho-image.jpg",
//   },
//   {
//       title: "Blinding Lights",
//       artist: "The Weeknd",
//       releaseDate: "2019-11-29",
//       album: "After Hours",
//       duration: "3:20",
//       image: "https://example.com/blinding-lights-image.jpg",
//   },
//   {
//       title: "Levitating",
//       artist: "Dua Lipa feat. DaBaby",
//       releaseDate: "2020-10-01",
//       album: "Future Nostalgia",
//       duration: "3:23",
//       image: "https://example.com/levitating-image.jpg",
//   },
//   {
//       title: "Good 4 U",
//       artist: "Olivia Rodrigo",
//       releaseDate: "2021-05-14",
//       album: "SOUR",
//       duration: "2:58",
//       image: "https://example.com/good-4-u-image.jpg",
//   },
//   {
//       title: "Stay",
//       artist: "The Kid LAROI & Justin Bieber",
//       releaseDate: "2021-07-09",
//       album: "F*CK LOVE 3: OVER YOU",
//       duration: "2:21",
//       image: "https://example.com/stay-image.jpg",
//   },
//   {
//       title: "Kiss Me More",
//       artist: "Doja Cat feat. SZA",
//       releaseDate: "2021-04-09",
//       album: "Planet Her",
//       duration: "3:29",
//       image: "https://example.com/kiss-me-more-image.jpg",
//   },
//   {
//       title: "Montero (Call Me By Your Name)",
//       artist: "Lil Nas X",
//       releaseDate: "2021-03-26",
//       album: "Montero",
//       duration: "2:17",
//       image: "https://example.com/montero-image.jpg",
//   },
//   {
//       title: "Save Your Tears",
//       artist: "The Weeknd",
//       releaseDate: "2020-03-20",
//       album: "After Hours",
//       duration: "3:35",
//       image: "https://example.com/save-your-tears-image.jpg",
//   },
//   {
//       title: "Heat Waves",
//       artist: "Glass Animals",
//       releaseDate: "2020-06-29",
//       album: "Dreamland",
//       duration: "3:58",
//       image: "https://example.com/heat-waves-image.jpg",
//   },
//   {
//       title: "Deja Vu",
//       artist: "Olivia Rodrigo",
//       releaseDate: "2021-04-09",
//       album: "SOUR",
//       duration: "4:02",
//       image: "https://example.com/deja-vu-image.jpg",
//   },
//   {
//       title: "Easy On Me",
//       artist: "Adele",
//       releaseDate: "2021-10-15",
//       album: "30",
//       duration: "3:44",
//       image: "https://example.com/easy-on-me-image.jpg",
//   },
//   {
//       title: "Believer",
//       artist: "Imagine Dragons",
//       releaseDate: "2017-02-01",
//       album: "Evolve",
//       duration: "3:24",
//       image: "https://example.com/believer-image.jpg",
//   },
//   {
//       title: "Lose Yourself",
//       artist: "Eminem",
//       releaseDate: "2002-10-28",
//       album: "8 Mile Soundtrack",
//       duration: "5:26",
//       image: "https://example.com/lose-yourself-image.jpg",
//   },
//   {
//       title: "Sweater Weather",
//       artist: "The Neighbourhood",
//       releaseDate: "2013-08-15",
//       album: "I Love You.",
//       duration: "3:28",
//       image: "https://example.com/sweater-weather-image.jpg",
//   },
//   {
//       title: "Beggin'",
//       artist: "Måneskin",
//       releaseDate: "2017-10-23",
//       album: "Chosen",
//       duration: "3:31",
//       image: "https://example.com/beggin-image.jpg",
//   },
//   {
//       title: "Summertime Sadness",
//       artist: "Lana Del Rey",
//       releaseDate: "2012-06-22",
//       album: "Born to Die",
//       duration: "4:25",
//       image: "https://example.com/summertime-sadness-image.jpg",
//   },
//   {
//       title: "Radioactive",
//       artist: "Imagine Dragons",
//       releaseDate: "2012-10-29",
//       album: "Night Visions",
//       duration: "3:06",
//       image: "https://example.com/radioactive-image.jpg",
//   },
//   {
//       title: "Stan",
//       artist: "Eminem feat. Dido",
//       releaseDate: "2000-12-04",
//       album: "The Marshall Mathers LP",
//       duration: "6:44",
//       image: "https://example.com/stan-image.jpg",
//   },
//   {
//       title: "R.I.P. 2 My Youth",
//       artist: "The Neighbourhood",
//       releaseDate: "2015-09-25",
//       album: "Wiped Out!",
//       duration: "3:21",
//       image: "https://example.com/rip-2-my-youth-image.jpg",
//   },
//   {
//       title: "Torna a casa",
//       artist: "Måneskin",
//       releaseDate: "2016-10-07",
//       album: "Il ballo della vita",
//       duration: "3:42",
//       image: "https://example.com/torna-a-casa-image.jpg",
//   },
//   {
//       title: "Take My Breath",
//       artist: "The Weeknd",
//       releaseDate: "2021-08-06",
//       album: "Dawn FM",
//       duration: "3:40",
//       image: "https://example.com/take-my-breath-image.jpg",
//   },
// ];

// topSongs.forEach((e) => {
//     let cart = document.createElement("div");
//     cart.classList.add("card");
//     cart.addEventListener("click", () => openPopup(e.id));
//     cart.innerHTML = `
//           <img src="${e.image}" alt="">
//               <div class="card-info">
//                 <p>${e.title}</p>
//                 <>${e.artist}</p>
//               </div>
//  `;
//     root.append(cart);
// });
