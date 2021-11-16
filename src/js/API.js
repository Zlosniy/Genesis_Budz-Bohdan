import card from '../templates/newsFeed.hbs';

const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);

async function getTrendingFeed() {
  const options = {
    method: 'GET',
    params: { video_url: 'https://vm.tiktok.com/ZMeb45Cv2/' },
    // url: 'https://tiktok33.p.rapidapi.com/trending/feed',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'c4915b95f9msh933e1431e58ddb9p1ed21ajsn1d68718f52f9',
    },
  };

  return await fetch('https://tiktok33.p.rapidapi.com/trending/feed', options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      const markup = card(data);
      console.log(markup);
      galleryRef.insertAdjacentHTML('beforeend', markup);
      const imageRef = document.querySelector('.avatar-image');
      console.log(imageRef);
      imageRef.addEventListener('click', showProfile);
    })
    .catch(error => {
      console.log(error);
    });
}

function showProfile() {
  galleryRef.innerHTML = '';
  //   homeLink.classList.remove('active');
  //   libraryLink.classList.add('active');
}
console.log(getTrendingFeed());

// const imageRef = document.querySelector('.avatar-image');
// console.log(imageRef);

// const videos = document.querySelectorAll('video');
// for(const video of videos) {
//   video.addEventListener('click', function(){
//     if(video.paused) {
//       video.play();
//     }else {
//       video.pause();
//     }
//   })
// };

// console.log(data1.text);

// function appendCardMarkup(data) {
//   galleryRef.insertAdjacentHTML('beforeend', card(data));
// };

// appendCardMarkup();
// const BASE_URL = 'https://tiktok33.p.rapidapi.com';

// const options = {
//   method: 'GET',
// //   url: 'https://tiktok33.p.rapidapi.com/trending/feed',
//   headers: {
//     'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
//     'x-rapidapi-key': 'c4915b95f9msh933e1431e58ddb9p1ed21ajsn1d68718f52f9',
//   },
// };

// fetch('https://tiktok33.p.rapidapi.com/trending/feed', options)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const data1 = getTrendingFeed();
// console.log(data1.text);
