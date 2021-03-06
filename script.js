var rokectSpeed = 0;
function particlesJsSpeed(rokectSpeed){
  particlesJS("particles-js", {
      particles: {
          number: { value: 43, density: { enable: true, value_area: 561.194221302933 } },
          color: { value: "#ffffff" },
          shape: { type: "star", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg", width: 100, height: 100 } },
          opacity: { value: 0.7891476416322727, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 6, random: true, anim: { enable: false, speed: 7.308694910712106, size_min: 0.1, sync: false } },
          line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: rokectSpeed, direction: "bottom-left", random: false, straight: true, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 0, rotateY: 0 } },
      },
      interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: false, mode: "grab" }, onclick: { enable: false, mode: "repulse" }, resize: true },
          modes: {
              grab: { distance: 0, line_linked: { opacity: 1 } },
              bubble: { distance: 599.4005994005994, size: 23.976023976023978, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
          },
      },
      retina_detect: true,
  });

}

particlesJsSpeed(0.5);


var counter, btnAdd,optionMode;
var n;
 
function addCount(){
    n++;
    counter.innerHTML = n;
}

window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    openModeModal();

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
    var select1 = document.getElementById('select1');
    var select2 = document.getElementById('select2');
    var select3 = document.getElementById('select3');
    var select4 = document.getElementById('select4');
    var optionButtun = document.getElementById('optionButtunInput');

    var url;
    var randoms = [];



    select1.addEventListener('input',function(){
      //alert("select1");
      if (card.className === 'open') {
        flip();
      }
      url = 'https://api.sssapi.app/ikn2OFJAdigxOScXHcTZp';
      optionAudio();
      backgroundColor1();
      readworddata(url);
      progress_reset();
      countReset();
      randoms.length = 0;
      rokectSpeed=0;
      closeModeModal();
    });
    select2.addEventListener('input',function(){
      //alert("select2");
      if (card.className === 'open') {
        flip();
      }
      url = 'https://api.sssapi.app/tVPUcQK6fxwwSnGoliqDJ';
      if (card.className === 'open') {
        flip();
      }
      optionAudio();
      backgroundColor2();
      readworddata(url);
      progress_reset();
      countReset();
      randoms.length = 0;
      rokectSpeed=0;
      closeModeModal();
    });
    select3.addEventListener('input',function(){
      //alert("select3");
      if (card.className === 'open') {
        flip();
      }
      url = 'https://api.sssapi.app/8-hJmLsQlPA1ag-99JzFJ';
      optionAudio();
      readworddata(url);
      backgroundColor3();
      progress_reset();
      countReset();
      randoms.length = 0;
      rokectSpeed=0;
      closeModeModal();
    });
    select4.addEventListener('input',function(){
      //alert("select4");
      if (card.className === 'open') {
        flip();
      }
      url = 'https://api.sssapi.app/ikn2OFJAdigxOScXHcTZp';
      optionAudio();
      backgroundColor4();
      readworddata(url);
      progress_reset();
      countReset();
      randoms.length = 0;
      rokectSpeed=0;
      closeModeModal();
    });
   
    card.addEventListener('click', function() {
      flip();
    });
  
    card.addEventListener('touchmove', next);
  
    btn.addEventListener('click', function() {
      //alert(counter.innerHTML);
      var totalCount = document.getElementById("total-word-count");
      var countx = totalCount.textContent;
      //alert(counter.innerHTML + countx);
      
      if(counter.innerHTML >= Number(countx)-1){
        openModal();
        
      } else {
        next();
      }
      
    });
  
    optionButtun.addEventListener('change',function(){
      openModeModal();
    });
      
    function next() {
      if (card.className === 'open') {
        //card.addEventListener('transitionend', readworddata);
        flip();
      } else {
        addCount();
        readworddata(url);
        nextAudio();
      }
    }

  
    function setCard(words) {
      //var num = Math.floor(Math.random() * words.length);
      var totalCount = document.getElementById("total-word-count");
      totalCount.innerHTML = words.length;
      
      var tmpVal = document.getElementById("tmpVal");
      var min =0, max= Number(words.length)-1;
      var num =roopRandom(min,max);

      cardFront.innerHTML = words[num]['en'];
      cardBack.innerHTML = words[num]['ja'];
      card.removeEventListener('transitionend', setCard);
    }
  
    
    function roopRandom(min,max){
      
        //randoms.push(tmpVal.innerHTML);
      
        while(true){
          
          var tmp = intRandom(min, max);
          
          if(!randoms.includes(tmp)){
            var reslut = tmp;
            randoms.push(tmp);
            //alert(randoms);
            break;
          }
          
        } 
      //alert(randoms);
      return reslut;
    }
  
    function intRandom(min, max){
      return Math.floor( Math.random() * (max - min + 1)) + min;
    } 

      
    function readworddata(url){

      //alert(url);
      fetch(url)
        .then(response => response.json())
        .then(data => setCard(data))
      
     }
  

  
    //setCard();
    readworddata();
    //スプレッドシートからAPIで読み込み

    // window.addEventListener('keyup', function(e) {
    //   // e.keyCode
    //   // f: 70
    //   // n: 78
    //   // console.log(e.keyCode);
    //   if (e.keyCode === 38) {
    //     flip();
    //   } else if (e.keyCode === 39) {
    //     next();
    //   }
    // });
  
    
  
    window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btn");
    n = 0;
 
    //btnAdd.addEventListener("click", addCount);
    }); 

    function flip() {
      card.className = card.className === '' ? 'open' : '';
      cardAudio();
    }
  
    function countReset(){
      counter = document.getElementById("counter");
      counter.innerHTML = 0;
      n = 0;
    }
  
    function progress_reset(){
      var elem = document.getElementById("myBar");
      elem.style.width = 0 + "%";
      elem.innerHTML = 0 + "%";
      particlesJsSpeed(0.5);
    }
  
    function progress_move(n) {
        var elem = document.getElementById("myBar");
        var width = n;

        frame();
      
        function frame() {
          
          var totalCount = document.getElementById("total-word-count");
          var x = totalCount.textContent;
          x = Number(x)-1;
                  
          if (width/x*100  > 100) {
            //clearInterval(id);
            // var count_value = 0;
            // width = 0;
            // elem.style.width = width + "%";
            // elem.innerHTML = width + "%";
          } else {
            //width++;
            
            // for(var q = 0; q < 5; q++){
            //   var progress_tmp;
            //   progress_tmp = progress_tmp + (width/x*100);
            //   elem.style.width = progress_tmp + "%";
            // }
            elem.style.width = width/x*100 + "%";
            elem.innerHTML = Math.round(width/x*100,0) + "%";
            rokectSpeed = rokectSpeed + (width/x*100)/10; //max-speed:200
            //alert(rokectSpeed);
            particlesJsSpeed(rokectSpeed);
          }
        }
    }

  })();

const modal = document.querySelector(".modal"); //modalを指定
const modeModal = document.querySelector(".mode-modal"); //modalを指定
const overlay = document.querySelector(".overlay"); //overlayを指定
const overlayWhite = document.querySelector(".overlay-white"); //overlayを指定
const btnOpenModal = document.querySelector(".show-modal"); //modalを開くボタンを指定
const btnOpenModeModal = document.querySelector(".show-mode-modal"); //modalを開くボタンを指定
const btnCloseModal = document.querySelector(".close-modal"); //modalを閉じるボタンを指定
const btnCloseModeModal = document.querySelector(".close-mode-modal"); //modalを閉じるボタンを指定

//modalとoverlayのhiddenクラスを消す（modalとoverlayが見えるようにする）処理
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  finishAudio();
};

const openModeModal = () => {
  modeModal.classList.remove("hidden");
  overlayWhite.classList.remove("hidden");
  modeSelectAudio();
};

//modalとoverlayのhiddenクラスを追加する（modalとoverlayが見えないようにする）処理
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  doReload();
};

const closeModeModal = () => {
  modeModal.classList.add("hidden");
  overlayWhite.classList.add("hidden");
};

//modalの開くボタンと閉じるボタンをクリックした時の処理
//btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
btnCloseModeModal.addEventListener("click", closeModeModal);

function doReload() {
    // reloadメソッドによりページをリロード
    window.location.reload();
}

function backgroundColor1() {
    var element = document.querySelector('#particles-js');
    element.style.background='url("https://robodone-dev.github.io/robotan/220723_2.gif"),linear-gradient(31deg, rgba(196, 182, 197, 1) 10%, rgba(35, 117, 163, 1))'
    element.style.backgroundRepeat ="no-repeat,repeat";
    element.style.backgroundPosition ="50% 6%";
}

function backgroundColor2() {
    var element = document.querySelector('#particles-js');
    element.style.background='url("https://robodone-dev.github.io/robotan/220723_2.gif"),linear-gradient(31deg, rgba(35, 117, 163, 1) 10%, rgba(142, 84, 219, 1))';
    element.style.backgroundRepeat ="no-repeat,repeat";
    element.style.backgroundPosition ="50% 6%";
}

function backgroundColor3() {
    var element = document.querySelector('#particles-js');
    element.style.background='url("https://robodone-dev.github.io/robotan/220723_2.gif"),linear-gradient(31deg, rgba(142, 84, 219, 1) 10%, rgba(237, 178, 92, 1))';
    element.style.backgroundRepeat ="no-repeat,repeat";
    element.style.backgroundPosition ="50% 6%";
}

function backgroundColor4() {
    var element = document.querySelector('#particles-js');
    element.style.background='url("https://robodone-dev.github.io/robotan/220723_2.gif"),linear-gradient(31deg, rgba(237, 178, 92, 1) 10%, rgba(231, 158, 223, 1))';
    element.style.backgroundRepeat ="no-repeat,repeat";
    element.style.backgroundPosition ="50% 6%";
}

function cardAudio() {
    var cardAudio = document.getElementById('card_audio'); //連続クリックに対応
    cardAudio.currentTime = 0;
    cardAudio.load(); //safariへの対応用
    cardAudio.play(); //クリックしたら音を再生
}

function optionAudio() {
    var optionAudio = document.getElementById('option_audio'); //連続クリックに対応
    optionAudio.currentTime = 0;
    optionAudio.load();  //safariへの対応用
    optionAudio.play(); //クリックしたら音を再生
}

function nextAudio() {
    var nextAudio = document.getElementById('next_audio');
    nextAudio.currentTime = 0; //連続クリックに対応
    nextAudio.load();  //safariへの対応用
    nextAudio.play(); //クリックしたら音を再生
}

function finishAudio() {
    var finishAudio = document.getElementById('finish_audio');
    finishAudio.currentTime = 0; //連続クリックに対応
    finishAudio.load();  //safariへの対応用
    finishAudio.play(); //クリックしたら音を再生
}

function modeSelectAudio() {
    var modeSelectAudio = document.getElementById('mode_select_audio');
    modeSelectAudio.currentTime = 0; //連続クリックに対応
    modeSelectAudio.load();  //safariへの対応用
    modeSelectAudio.play(); //クリックしたら音を再生
}


