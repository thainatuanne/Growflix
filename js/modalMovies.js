const growcastRow = document.getElementById("growcast-videos");
const webinarRow = document.getElementById("webinar-videos");
const uxUiRow = document.getElementById("jornadaUX-videos");
const geralRow = document.getElementById("diversos-videos");
const iframeMovie = document.getElementById("videoFrame");
const movieModal = new bootstrap.Modal("#videoModal", {
  keyboard: false,
});

const growcastItems = movies.filter(
  (item) => item.standardCategory === "Growcast [Episódios]"
);
const webinarItems = movies.filter(
  (item) => item.standardCategory === "Webinar em Flutter"
);
const uxUiItems = movies.filter(
  (item) => item.standardCategory === "Jornada UX/UI"
);

const geralItems = movies.filter(
  (item) => item.standardCategory === "Diversos"
);

function renderItems(element, items) {
  if (items.length > 0) {
    element.innerHTML += `
      <div class="col-md-12">
        <p class="fw-bold mb-0 fs-1 text-white" id="p-title">
          ${items[0].standardCategory}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
          </svg>
        </p>
      </div>
    `;
  }

  items.forEach((item) => {
    element.innerHTML += `
      <div class="col-12 col-sm-6 col-md-6 col-lg-3 col-movie">
        <div class="item-hover">
          <div class="item-content">
            <img src="${item.img}" class="img-fluid rounded" alt="${item.title}" />
            <div class="hover-overlay">
              <button class="play-button" data-link="${item.link}" onclick="openMovie(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </button>
              <p class="detail-movie">${item.title}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function stopIframe() {
  const iframeVideo = document.getElementById("videoFrame");
  if (iframeVideo) {
    iframeVideo.src = "";
  }
}

document
  .getElementById("videoModal")
  .addEventListener("hidden.bs.modal", () => {
    const activeElement = document.activeElement;
    if (activeElement) activeElement.blur();
  });

  function openMovie(button) {
    const videoFrame = document.getElementById('videoFrame');
    const videoLink = button.getAttribute('data-link');

    videoFrame.src = videoLink;

    const modal = new bootstrap.Modal(document.getElementById('videoModal'));
    modal.show();

    document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
        videoFrame.src = "";
    });
}

renderItems(growcastRow, growcastItems);
renderItems(webinarRow, webinarItems);
renderItems(uxUiRow, uxUiItems);
renderItems(geralRow, geralItems);