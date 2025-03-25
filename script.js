fetch('https://musicbrainz.org/ws/2/artist/5441c29d-3602-4898-b1a1-b77fa23b8e50?inc=url-rels&fmt=json')
  .then(response => response.json())
  .then(data => console.log(data));
