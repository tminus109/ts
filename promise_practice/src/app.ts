type Album = {
  userId: number;
  id: number;
  title: string;
  photos?: Array<Photo>;
};

type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

async function getAlbums() {
  const allAlbums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((response) => {
    return response.json() as Promise<Array<Album>>;
  });
  const albums = allAlbums.slice(0, 5);
  const promisesOfPhotos = albums.map((album) =>
    fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=" + album.id
    ).then((response) => response.json() as Promise<Array<Photo>>)
  );
  const photos = await Promise.all(promisesOfPhotos);
  return albums.map((album, i) => ({ ...album, photos: photos[i] }));
}

window.onload = async function () {
  const albums = await getAlbums();
  renderAlbums(albums);
};

function renderAlbums(albums: Array<Album>) {
  const container = document.querySelector("#root");
  if (!container) {
    return;
  }
  container.innerHTML = `
    <h1>Albums:</h1>
    ${albums
      .map(
        (album) => `
    <div>
      <h3>${album.id}</h3>
      <p>${album.title}</p>
      ${album.photos
        ?.map(
          (photo) => `
        <img
        src="${photo.thumbnailUrl}"
          style="display: inline-block; margin-right: 6px; width: 30px; height: 30px"
        />
      `
        )
        .join("")}
    </div>
    `
      )
      .join("")}
  `;
}
