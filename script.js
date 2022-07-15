particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#2fff14"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.809723090737089,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":208.44356791251798,"color":"#37b4e8","opacity":0.6894671861721748,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

(function() {
    'use strict';

//     var words = [
//       {'en': 'Python', 'ja': 'パイソン' },
//       {'en': 'Run', 'ja': '実行' },
//       {'en': 'Debug', 'ja': 'デバッグ' },
//       {'en': 'Knowledge', 'ja': 'ナレッジ' },
//       {'en': 'Remove', 'ja': '削除' }
//     ];

    var card = document.getElementById('card');
    var cardFront = document.getElementById('card-front');
    var cardBack = document.getElementById('card-back');
    var btn = document.getElementById('btn');
    card.addEventListener('click', function() {
      flip();
    });
    btn.addEventListener('click', function() {
      next();
    });
    
    function next() {
      if (card.className === 'open') {
        //card.addEventListener('transitionend', readworddata);
        flip();
      } else {
        readworddata();
      }
    }

    function setCard(words) {
      var num = Math.floor(Math.random() * words.length);
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

    function flip() {
      card.className = card.className === '' ? 'open' : '';
    }

  })();
