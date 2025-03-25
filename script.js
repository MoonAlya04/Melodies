let cards = document.querySelector(".cards-songs");
let cards2 = document.querySelector(".cards-songs2");

let topSongs = [
    {
        id: 1,
        title: "Psycho",
        artist: "Baekhyun",
        releaseDate: "2020-11-30",
        album: "Delight",
        duration: "3:29",
        image: "img/1.png",
    },
    {
        id: 10,
        title: "Deja Vu",
        artist: "Olivia Rodrigo",
        releaseDate: "2021-04-09",
        album: "SOUR",
        duration: "4:02",
        image: "img/1.png",
    },
    {
        id: 2,
        title: "Blinding Lights",
        artist: "The Weeknd",
        releaseDate: "2019-11-29",
        album: "After Hours",
        duration: "3:20",
        image: "img/1.png",
    },
    {
        id: 3,
        title: "Levitating",
        artist: "Dua Lipa feat. DaBaby",
        releaseDate: "2020-10-01",
        album: "Future Nostalgia",
        duration: "3:23",
        image: "img/1.png",
    },
    {
        id: 4,
        title: "Good 4 U",
        artist: "Olivia Rodrigo",
        releaseDate: "2021-05-14",
        album: "SOUR",
        duration: "2:58",
        image: "img/1.png",
    },
    {
        id: 5,
        title: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        releaseDate: "2021-07-09",
        album: "F*CK LOVE 3: OVER YOU",
        duration: "2:21",
        image: "img/1.png",
    },
    {
        id: 6,
        title: "Kiss Me More",
        artist: "Doja Cat feat. SZA",
        releaseDate: "2021-04-09",
        album: "Planet Her",
        duration: "3:29",
        image: "img/1.png",
    },
    {
        id: 7,
        title: "Montero (Call Me By Your Name)",
        artist: "Lil Nas X",
        releaseDate: "2021-03-26",
        album: "Montero",
        duration: "2:17",
        image: "img/1.png",
    },
    {
        id: 8,
        title: "Save Your Tears",
        artist: "The Weeknd",
        releaseDate: "2020-03-20",
        album: "After Hours",
        duration: "3:35",
        image: "img/1.png",
    },
    {
        id: 9,
        title: "Heat Waves",
        artist: "Glass Animals",
        releaseDate: "2020-06-29",
        album: "Dreamland",
        duration: "3:58",
        image: "img/1.png",
    },
];

topSongs.forEach((e) => {
    let cart = document.createElement("div");
    if (e.id % 2 === 0) {
        cart.classList.add("card", "card-even");
        cart.classList.add("card");
        cart.innerHTML = `
            <div class="card-song">
                <img src="${e.image}" />
                <div class="song-info">
                    <h3 class="song-title">${e.title}</h3>
                    <p class="song-artist">${e.artist}</p>
                </div>
            </div>
        `;
        cards.append(cart);
    }
});
topSongs.forEach((e) => {
    let cart = document.createElement("div");
    if (e.id % 2 !== 0) {
        cart.classList.add("card", "card-even");
        cart.classList.add("card");
        cart.innerHTML = `
            <div class="card-song">
                <img src="${e.image}" />
                <div class="song-info">
                    <h3 class="song-title">${e.title}</h3>
                    <p class="song-artist">${e.artist}</p>
                </div>
            </div>
        `;
        cards2.append(cart);
    }
});
