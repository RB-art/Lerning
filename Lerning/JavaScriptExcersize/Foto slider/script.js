function showLoader() {
    document.getElementById("loader").style.display = "flex";
  }

  function hideLoader() {
    document.getElementById("loader").style.display = "none";
  }

const btnLoad = document.querySelector(".btn");
const wrap = document.querySelector(".wrap");

function startLoadingImages() {
fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
  .then((res) => res.json())
  .then((res) => {
    let elem = ``
    res.forEach(img => {
        elem += `<img src = ${img.url} />` ;
        })
        hideLoader()
        wrap.innerHTML = elem;
  })
  .catch((err) => console.log(err.message));
}

btnLoad.addEventListener("click", () => {
      showLoader();
      startLoadingImages();
    })
