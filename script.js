particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#2fff14"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.809723090737089,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":208.44356791251798,"color":"#37b4e8","opacity":0.6894671861721748,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


let counter, btnAdd;
let n;
 
function addCount(){
    n++;
    counter.innerHTML = n;
}

window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    n = 0;
 
    btnAdd.addEventListener("click", addCount);
});

(function() {
    'use strict';

//     var words = [
//       {'en': 'Python', 'ja': 'パイソン' },
//       {'en': 'Run', 'ja': '実行' },
//       {'en': 'Debug', 'ja': 'デバッグ' },
//       {'en': 'Knowledge', 'ja': 'ナレッジ' },
//       {'en': 'Remove', 'ja': '削除' }
//     ];
  
    let counter;
    let n;

    function addCount(){
        n++;
        counter.innerHTML = n;
        var byn = n;
        progress_move(byn);
    }

    var card = document.getElementById('card');
    var cardFront = document.getElementById('card-front');
    var cardBack = document.getElementById('card-back');
    var btn = document.getElementById('btn');
  
    card.addEventListener('click', function() {
      flip();
    });
  
    btn.addEventListener('click', function() {
      //alert(counter.innerHTML);
      var totalCount = document.getElementById("total-word-count");
      var countx = totalCount.textContent;
      //alert(counter.innerHTML + countx);
      
      if(counter.innerHTML > Number(countx)){
        openModal();
      } else {
        next();
      }
      
      
    });
    
    function next() {
      if (card.className === 'open') {
        //card.addEventListener('transitionend', readworddata);
        flip();
      } else {
        addCount();
        readworddata();
      }
    }

  
    function setCard(words) {
      var num = Math.floor(Math.random() * words.length);
      var totalCount = document.getElementById("total-word-count");
      totalCount.innerHTML = words.length;
      
      cardFront.innerHTML = words[num]['en'];
      cardBack.innerHTML = words[num]['ja'];
      card.removeEventListener('transitionend', setCard);
    }
      
    function readworddata(){
      const url = 'https://api.sssapi.app/ikn2OFJAdigxOScXHcTZp';
      fetch(url)
        .then(response => response.json())
        .then(data => setCard(data))
    }
  

  
    //setCard();
    readworddata();
    //スプレッドシートからAPIで読み込み

    window.addEventListener('keyup', function(e) {
      // e.keyCode
      // f: 70
      // n: 78
      // console.log(e.keyCode);
      if (e.keyCode === 38) {
        flip();
      } else if (e.keyCode === 39) {
        next();
      }
    });
  
    window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btn");
    n = 0;
 
    //btnAdd.addEventListener("click", addCount);
    }); 

    function flip() {
      card.className = card.className === '' ? 'open' : '';
    }
  
    function progress_move(n) {
        var elem = document.getElementById("myBar");
        var width = n-1;
        //var id = setInterval(frame, 10);

        frame();
      
        function frame() {
          
          var totalCount = document.getElementById("total-word-count");
          var x = totalCount.textContent;
          x = Number(x)
                    
          if (width/x*100  > 101) {
            //clearInterval(id);
            // var count_value = 0;
            // width = 0;
            // elem.style.width = width + "%";
            // elem.innerHTML = width + "%";
          } else {
            //width++;
            elem.style.width = width/x*100 + "%";
            elem.innerHTML = Math.round(width/x*100,0) + "%";
          }
        }
    }

  })();

const modal = document.querySelector(".modal"); //modalを指定
const overlay = document.querySelector(".overlay"); //overlayを指定
const btnOpenModal = document.querySelector(".show-modal"); //modalを開くボタンを指定
const btnCloseModal = document.querySelector(".close-modal"); //modalを閉じるボタンを指定

//modalとoverlayのhiddenクラスを消す（modalとoverlayが見えるようにする）処理
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//modalとoverlayのhiddenクラスを追加する（modalとoverlayが見えないようにする）処理
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  doReload();
};

//modalの開くボタンと閉じるボタンをクリックした時の処理
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

function doReload() {
    // reloadメソッドによりページをリロード
    window.location.reload();
}
