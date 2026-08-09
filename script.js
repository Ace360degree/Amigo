const pageImage = document.querySelector("#pageImage");
const pdfPreview = document.querySelector("#pdfPreview");

function showPdfPreview() {
  pageImage.classList.add("is-hidden");
  pdfPreview.classList.remove("is-hidden");
}

function showPageImage() {
  pageImage.classList.remove("is-hidden");
  pdfPreview.classList.add("is-hidden");
}

pageImage.addEventListener("load", showPageImage);
pageImage.addEventListener("error", showPdfPreview);

if (pageImage.complete) {
  if (pageImage.naturalWidth > 0) {
    showPageImage();
  } else {
    showPdfPreview();
  }
}
