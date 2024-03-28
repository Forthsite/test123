const galleryItems = document.querySelectorAll('.grid-item');
// Function to filter gallery items based on category
function filterGallery(category) {
  // Loop through all gallery items
  galleryItems.forEach(item => {
    // If the item matches the selected category or "all", display it, otherwise hide it
    if (item.classList.contains(category)) {
    item.classList.add("fade-in")
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
document.querySelectorAll('.grid-item.graphics img, .grid-item.socmedia img').forEach(image =>{
  image.onclick = () =>{
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector('.popup-image').style.display = 'none';
}

const popupBtns = document.querySelectorAll('.popupbtn');
popupBtns.forEach((btn) => {
  btn.onclick = () => {
    document.querySelector('.popup-article').style.display = 'block';
  };
});

document.querySelector('.popup-article span').onclick = () => {
  document.querySelector('.popup-article').style.display = 'none';
}

document.querySelector('.hider').onclick = () => {
  document.querySelector('.popup-article').style.display = 'none';
}


const plzenpin = document.getElementById("plzenpin")
const plzentip = document.getElementById("plzentip")

plzenpin.addEventListener("mouseover", function(){
  plzentip.setAttribute("style", "display: initial;");
});

plzenpin.addEventListener("mouseout", function(){
  plzentip.setAttribute("style", "display: none;");
});

const prahapin = document.getElementById("prahapin")
const prahatip = document.getElementById("prahatip")

prahapin.addEventListener("mouseover", function(){
  prahatip.setAttribute("style", "display: initial;");
});

prahapin.addEventListener("mouseout", function(){
  prahatip.setAttribute("style", "display: none;");
});

const brnopin = document.getElementById("brnopin")
const brnotip = document.getElementById("brnotip")

brnopin.addEventListener("mouseover", function(){
  brnotip.setAttribute("style", "display: initial;");
});

brnopin.addEventListener("mouseout", function(){
  brnotip.setAttribute("style", "display: none;");
});

const zlinpin = document.getElementById("zlinpin")
const zlintip = document.getElementById("zlintip")

zlinpin.addEventListener("mouseover", function(){
  zlintip.setAttribute("style", "display: initial;");
});

zlinpin.addEventListener("mouseout", function(){
  zlintip.setAttribute("style", "display: none;");
});


document.addEventListener('DOMContentLoaded', () => {
  const popupBtns = document.querySelectorAll('.popupbtn');
  popupBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const blogpost = event.target.closest('.blogpost');

      const articleImage = blogpost.querySelector('.blogpost-img')
      const imgURL = window.getComputedStyle(articleImage).getPropertyValue('background-image');
      const imgPosition = window.getComputedStyle(articleImage).getPropertyValue('background-position');
      
      const topic = blogpost.querySelector('.topic').innerHTML;
      const header = blogpost.querySelector('.blogheader h2').innerHTML;
      const text = blogpost.querySelector('.text').innerHTML;

      const popupTopic = document.querySelector('.popup-article-topic');
      const popupHeader = document.querySelector('.popup-article-header');
      const popupText = document.querySelector('.popup-article-text');
      const popupImg = document.querySelector('.popup-article-img');
  
      popupTopic.innerHTML = topic;
      popupHeader.innerHTML = header;
      popupText.innerHTML = text;
      popupImg.style.backgroundImage = imgURL;
      popupImg.style.backgroundPosition = imgPosition
    });
  });
});


const articleToggle = document.querySelector('#clankysvg');
const blogposts = document.querySelectorAll('.blogpost');

articleToggle.addEventListener('click', () => {
  blogposts.forEach(post => {
    if (post.classList.contains('in-view')) {
      post.classList.remove('in-view');
    } else {
      post.classList.add('in-view');
    }
  });
});