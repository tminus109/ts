"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getAlbums() {
    return __awaiter(this, void 0, void 0, function* () {
        const allAlbums = yield fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
            return response.json();
        });
        const albums = allAlbums.slice(0, 5);
        const promisesOfPhotos = albums.map((album) => fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + album.id).then((response) => response.json()));
        const photos = yield Promise.all(promisesOfPhotos);
        return albums.map((album, i) => (Object.assign(Object.assign({}, album), { photos: photos[i] })));
    });
}
window.onload = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const albums = yield getAlbums();
        renderAlbums(albums);
    });
};
function renderAlbums(albums) {
    const container = document.querySelector("#root");
    if (!container) {
        return;
    }
    container.innerHTML = `
    <h1>Albums:</h1>
    ${albums
        .map((album) => {
        var _a;
        return `
    <div>
      <h3>${album.id}</h3>
      <p>${album.title}</p>
      ${(_a = album.photos) === null || _a === void 0 ? void 0 : _a.map((photo) => `
        <img
        src="${photo.thumbnailUrl}"
          style="display: inline-block; margin-right: 6px; width: 30px; height: 30px"
        />
      `).join("")}
    </div>
    `;
    })
        .join("")}
  `;
}
