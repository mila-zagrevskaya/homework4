// moved of pictures 
// resize

let collection = Array.from (document.getElementsByClassName ('scheme'))

collection.forEach (
  function (elem) {
    elem.onclick = function (event) {
      this.style.width = "900px";
    }
  }
)
collection.forEach (
  function (elem) {
    elem.onmouseout = function (event) {
      this.style.width = "800px";
    }
  }
)

