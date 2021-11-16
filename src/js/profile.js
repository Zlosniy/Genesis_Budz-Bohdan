const galleryRef = document.querySelector('.gallery');

  async function getUserInfo() {
    const options = {
      method: 'GET',
    //   params: { video_url: 'https://vm.tiktok.com/ZMeb45Cv2/' },
      // url: 'https://tiktok33.p.rapidapi.com/trending/feed',
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': 'c4915b95f9msh933e1431e58ddb9p1ed21ajsn1d68718f52f9',
      },
    };
  
    return await fetch('https://tiktok33.p.rapidapi.com/user/info/dave.xp', options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        // const markup = card(data);
        // console.log(markup);
        // galleryRef.insertAdjacentHTML('beforeend', markup);
        // const imageRef = document.querySelector('.avatar-image');
        // console.log(imageRef);
        // imageRef.addEventListener('click', showProfile);
      })
      .catch(error => {
        console.log(error);
      });
  }