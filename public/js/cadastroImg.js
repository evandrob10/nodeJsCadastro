let containerUploads = document.querySelector("#container-upload");
let containerImg = document.querySelector("#container-img div");
let imgUpload = containerUploads.querySelector("img");

containerImg.addEventListener("click",()=> containerUploads.style.display = "")
imgUpload.addEventListener("click",()=> containerUploads.submit())



