'use strict';

const API_KEY = 'EyolJC2XUekHVhJx1K6IaFstMDu61ud1';
const xhr = new XMLHttpRequest();

xhr.onload = function () {
    let myData = JSON.parse(xhr.responseText);
    console.log(myData);

    let imgList = document.querySelectorAll('.cell');
    for (let i = 0; i < imgList.length; i++) {
        imgList[i].style.backgroundImage = `url(${
      myData.data[i].images['480w_still'].url
    })`;
        imgList[i].onclick = function () {
            imgList[i].style.backgroundImage = `url(${
        myData.data[i].images['downsized'].url
      })`;
        };
    }
};

xhr.open(
    'GET',
    `https://api.giphy.com/v1/gifs/search?q=random&api_key=${API_KEY}&limit=16`
);
xhr.send();