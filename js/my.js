var flowers_id = null
var caidan = function(){
    // alert("快找那个笨蛋开发者获得彩蛋吧！")
    swal("快找那个笨蛋开发者获得彩蛋吧！", {
        icon: "http://up.54fcnr.com/pic_source/41/a3/e3/41a3e383e54a6b7f8770ce30f644a42e.gif",
        buttons: {
          cancel: "我不管先把他打一顿！",
          catch: {
            text: "Throw Pokéball!",
            value: "catch",
          },
        },
      })
      .then((value) => {
        switch (value) {
       
          case "catch":
            swal({
              title:"Gotcha!", 
              text:"You caught the Snitch!", 
              icon:"https://github.com/ReBenDish/ayue-panda/blob/gh-pages/images/snitch.jpg?raw=true",
              content: "input", 
              button: {
                text: "Unlocking Charm!",
                closeModal: false,
              },
            })
            .then(charm => {
              console.log("wangqiu",charm)
              if (charm == "555") {
                swal({
                  title: "新年快乐！我的本命女孩！",
                  text: "All for you ！",
                  icon: "https://github.com/ReBenDish/ayue-panda/blob/gh-pages/images/ruby.jpg?raw=true"
                })
              }
              else {
                swal({
                  title: "这不是真正的开锁咒哟！",
                  icon: "error"
                })
              }
            });
            break;
       
          default:
            swal("对不起!你永远是我最棒的彩蛋！Always",{
              icon: "https://github.com/ReBenDish/ayue-panda/blob/gh-pages/images/wq.jpg?raw=true"
            }
            );
        }
      });
}

var flowers = function() {

  var snowflakeURl = [
  './fonts/petals/o_1.png',
  './fonts/petals/o_2.png',
  './fonts/petals/o_3.png',
  './fonts/petals/o_4.png',
  './fonts/petals/o_5.png',
  './fonts/petals/o_6.png'
  ] //js设置数组存储6张花瓣的图片

  var container = $("#content");
  visualWidth = container.width();
  visualHeight = container.height();
 //获取content的宽高
  ///////
  //飘雪花 //
  ///////
  function snowflake() {
    // 雪花容器
    var $flakeContainer = $('#snowflake');
    // 随机六张图
    function getImagesName() {
      return snowflakeURl[[Math.floor(Math.random() * 6)]];
    }
    // 创建一个雪花元素
    function createSnowBox() {
      var url = getImagesName();
      return $('<div class="snowbox" />').css({
      'width': 41,
      'height': 41,
      'position': 'absolute',
      'backgroundSize': 'cover',
      'zIndex': 100000,
      'top': '-41px',
      'backgroundImage': 'url(' + url + ')'
      }).addClass('snowRoll');
    }
    // 开始飘花
    flowers_id = setInterval(function() {
      // 运动的轨迹
      var startPositionLeft = Math.random() * visualWidth,
      startOpacity = 1,
      endPositionTop = visualHeight - 40,
      endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
      duration = visualHeight * 10 + Math.random() * 5000;
 
      // 随机透明度，不小于0.5
      var randomStart = Math.random();
      randomStart = randomStart < 0.5 ? startOpacity : randomStart;
      // 创建一个雪花
      var $flake = createSnowBox();
      // 设计起点位置
      $flake.css({
      left: startPositionLeft,
      opacity : randomStart
      });
      // 加入到容器
      $flakeContainer.append($flake);
      // 开始执行动画
      $flake.transition({
        top: endPositionTop,
        left: endPositionLeft,
        opacity: 0.7
        }, duration, 'ease-out', function() {
        $(this).remove() //结束后删除
      });
  
    }, 66);
  } 
  if (flowers_id){
    clearInterval(flowers_id)
    flowers_id = null
  } else {
    snowflake()
  }
  
  //执行函数
  // function toggleSound() {
  //   var music = $('#iloveu');//获取ID  
  //   console.log(music)
  //   if (music[0].paused) { //判读是否播放  
  //     music.paused=false;
  //     music[0].play(); //没有就播放 
  //     console.log('play')
  //   }    
  // }
  // setTimeout(() => toggleSound(), 10000)
  
  
 }
// document.getElementById('mute-button').addEventListener('click', function() {
//   var video = document.getElementById('background-video');
//   if (video.muted) {
//       video.muted = false;
//       this.textContent = '静音';
//   } else {
//       video.muted = true;
//       this.textContent = '取消静音';
//   }
// });

var videoContainer = document.getElementById('video-container');
var headVideo = document.getElementById('head-video');
var playButton = document.getElementById('play-button');

videoContainer.addEventListener('mouseenter', function() {
    playButton.style.display = 'block'; // 显示播放按钮
});

videoContainer.addEventListener('mouseleave', function() {
    playButton.style.display = 'none'; // 隐藏播放按钮
});

playButton.addEventListener('click', function() {
    if (headVideo.paused) {
        headVideo.play();
        this.textContent = '暂停';
        headVideo.style.display = 'block';
    } else {
        headVideo.pause();
        this.textContent = '播放';
        headVideo.style.display = 'none';
    }
});


 // 随机化数组的函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // 交换元素
  }
}

var floatingButton = document.getElementById("floatingButton");
var isDragging = false;

floatingButton.addEventListener('mousedown', function(e) {
    var offsetX = e.clientX - floatingButton.getBoundingClientRect().left;
    var offsetY = e.clientY - floatingButton.getBoundingClientRect().top;
    var isDragging = false;
    function mouseMoveHandler(e) {
        isDragging = true;
        floatingButton.style.right = 'auto';
        floatingButton.style.bottom = 'auto';
        floatingButton.style.top = e.clientY - offsetY + 'px';
        floatingButton.style.left = e.clientX - offsetX + 'px';
    }

    function reset() {
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', reset);
    }

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', reset);
    floatingButton.addEventListener('click', function() {
      if (!isDragging) {
          // window.location.href = 'https://chat.openai.com'; // 目标网站的 URL
          window.open('https://chat.openai.com', '_blank');
      }
  });
});

$('#2019Carousel').carousel({
  interval: 2000
})

document.addEventListener('DOMContentLoaded', function() {
  var images = ['mmexport1551016891644.jpg', 'mmexport1571357385549.jpg', 'mmexport1702820443887.jpg', 'mmexport1702820449592.jpg']; // 从服务器获取或者静态定义
  var totle_images = ['IMG_20190222_115036.jpg', 'IMG_20190222_123457.jpg', 'mmexport1551016888760.jpg', 'mmexport1551016891644.jpg', 'mmexport1571357317261.jpg', 'mmexport1571357321684.jpg', 'mmexport1571357385549.jpg', 'mmexport1571357392235.jpg', 'mmexport1577288913962.jpg', 'mmexport1702820110444.jpg', 'mmexport1702820198707.jpg', 'mmexport1702820205215.jpg', 'mmexport1702820210564.jpg', 'mmexport1702820215206.jpg', 'mmexport1702820219263.jpg', 'mmexport1702820222967.jpg', 'mmexport1702820227168.jpg', 'mmexport1702820232442.jpg', 'mmexport1702820242694.jpg', 'mmexport1702820245696.jpg', 'mmexport1702820260015.jpg', 'mmexport1702820270622.jpg', 'mmexport1702820276378.jpg', 'mmexport1702820279305.jpg', 'mmexport1702820290631.jpg', 'mmexport1702820293962.jpg', 'mmexport1702820297520.jpg', 'mmexport1702820303503.jpg', 'mmexport1702820307706.jpg', 'mmexport1702820312442.jpg', 'mmexport1702820317492.jpg', 'mmexport1702820321060.jpg', 'mmexport1702820323488.jpg', 'mmexport1702820334630.jpg', 'mmexport1702820349422.jpg', 'mmexport1702820360161.jpg', 'mmexport1702820363869.jpg', 'mmexport1702820374695.jpg', 'mmexport1702820416372.jpg', 'mmexport1702820422544.jpg', 'mmexport1702820427062.jpg', 'mmexport1702820435135.jpg', 'mmexport1702820438333.jpg', 'mmexport1702820441091.jpg', 'mmexport1702820443887.jpg', 'mmexport1702820449592.jpg']
  var carouselInner = document.getElementById('2019CarouselInner');
  var carouselIndicators = document.getElementById('2019CarouselIndicators');
  var galleryList = document.getElementById('gallery_list_2019');

  for (var i = 0; i < images.length; i++) {
      var indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#2019Carousel');
      indicator.setAttribute('data-slide-to', i.toString());
      if (i === 0) indicator.className = 'active';

      var itemDiv = document.createElement('div');
      itemDiv.className = 'item' + (i === 0 ? ' active' : '');
      itemDiv.style = 'width:inherit; height:inherit; max-width:100%; max-height:100%;margin: auto;';
      var img = document.createElement('img');
      img.decoding ="async";
      img.style = 'width:inherit; height: inherit; object-fit:cover;margin: auto;';
      img.src = './images/2019/' + images[i];
      
      itemDiv.appendChild(img);
      carouselInner.appendChild(itemDiv);
      carouselIndicators.appendChild(indicator);
  }
  for (var i = 0; i < totle_images.length; i++){
    const li = document.createElement('li');
      li.className = 'one-third animate-box fadeIn animated-fast';
      li.setAttribute('data-animate-effect', 'fadeIn');
      li.style.backgroundImage = 'url(images/ayue/2019/' + totle_images[i] + ')';

      const link = document.createElement('a');
      link.href = "#";
      link.className = 'color-6';

      const summary = document.createElement('div');
      summary.className = 'case-studies-summary';
      // 你可以添加额外的描述和标题
      const description = document.createElement('span');
      const title = document.createElement('h2');

      // 假设图片名包含日期或描述
      // 如 "2022.01.01-新年祈福.jpg"
      // const parts = image.split('-');
      description.textContent = "parts[1].replace('ayue', 'love')";
      title.textContent = "parts[0].split('lie').popall";

      summary.appendChild(description);
      summary.appendChild(title);
      link.appendChild(summary);
      li.appendChild(link);
      galleryList.appendChild(li);
  }
});

document.getElementById('toggleButton_2019').addEventListener('click', function() {
  var carousel = document.getElementById('2019Carousel');
  var container = document.getElementById('imageContainer_2019');

  if (container.style.display === 'none') {
      container.style.display = 'block';
      carousel.style.display = 'none';
      this.textContent = '收起';
      loadImages(); // 懒加载图片
  } else {
      container.style.display = 'none';
      carousel.style.display = 'block';
      this.textContent = '展开';
  }
});

function loadImages() {
  var lazyItems = [].slice.call(document.querySelectorAll("img.lazy, .gallery-item"));
  // var lazyImages = [].slice.call(container.querySelectorAll(".gallery-item"));

  if ("IntersectionObserver" in window) {
      let lazyObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let lazyItem = entry.target;

                // 检查是 img 元素还是具有背景图的元素
                if (lazyItem.tagName.toLowerCase() === 'img') {
                    lazyItem.src = lazyItem.dataset.src;
                } else {
                    lazyItem.style.backgroundImage = 'url(' + lazyItem.dataset.src + ')';
                }

                lazyObserver.unobserve(lazyItem);
            }
        });
      });

      lazyItems.forEach(function(lazyItem) {
          lazyObserver.observe(lazyItem);
      });
  } else {
      // Fallback for browsers that don't support IntersectionObserver
      // 传统的滚动监听方式
  }
}

$('#2020Carousel').carousel({
  interval: 2000
})

document.addEventListener('DOMContentLoaded', function() {
  var images = ['mmexport1578491678349.jpg', 'mmexport1592613138241.jpg', 'mmexport1592613169296.jpg', 'mmexport1592613232246.jpg', 'mmexport1593500011681.jpg', 'mmexport1702820497401.jpg', 'mmexport1702822031444.jpg', 'mmexport1702822054050.jpg']; // 从服务器获取或者静态定义
  var totle_images = ['IMG_20200620_184953.jpg', 'mmexport1578491678349.jpg', 'mmexport1578922055059_1.jpg', 'mmexport1592613138241.jpg', 'mmexport1592613169296.jpg', 'mmexport1592613175717.jpg', 'mmexport1592613228238.jpg', 'mmexport1592613232246.jpg', 'mmexport1592613235211.jpg', 'mmexport1592649230629.jpg', 'mmexport1592649243290.jpg', 'mmexport1592649263705.jpg', 'mmexport1592649277876.jpg', 'mmexport1593500011681.jpg', 'mmexport1702820497401.jpg', 'mmexport1702820529401.jpg', 'mmexport1702820536177.jpg', 'mmexport1702820544233.jpg', 'mmexport1702820560750.jpg', 'mmexport1702822028119.jpg', 'mmexport1702822031444.jpg', 'mmexport1702822035336.jpg', 'mmexport1702822054050.jpg']
  var carouselInner = document.getElementById('2020CarouselInner');
  var carouselIndicators = document.getElementById('2020CarouselIndicators');
  var galleryList = document.getElementById('gallery_list_2020');

  for (var i = 0; i < images.length; i++) {
      var indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#2020Carousel');
      indicator.setAttribute('data-slide-to', i.toString());
      if (i === 0) indicator.className = 'active';

      var itemDiv = document.createElement('div');
      itemDiv.className = 'item' + (i === 0 ? ' active' : '');
      itemDiv.style = 'width:inherit; height:inherit; max-width:100%; max-height:100%;margin: auto;';
      var img = document.createElement('img');
      img.decoding ="async";
      img.style = 'width:inherit; height: inherit; object-fit:cover;margin: auto;';
      img.src = './images/2020/' + images[i];
      
      itemDiv.appendChild(img);
      carouselInner.appendChild(itemDiv);
      carouselIndicators.appendChild(indicator);
  }
  for (var i = 0; i < totle_images.length; i++){
    const li = document.createElement('li');
      li.className = 'one-third animate-box fadeIn animated-fast';
      li.setAttribute('data-animate-effect', 'fadeIn');
      li.style.backgroundImage = 'url(images/ayue/2020/' + totle_images[i] + ')';

      const link = document.createElement('a');
      link.href = "#";
      link.className = 'color-6';

      const summary = document.createElement('div');
      summary.className = 'case-studies-summary';
      // 你可以添加额外的描述和标题
      const description = document.createElement('span');
      const title = document.createElement('h2');

      // 假设图片名包含日期或描述
      // 如 "2022.01.01-新年祈福.jpg"
      // const parts = image.split('-');
      description.textContent = "parts[1].replace('ayue', 'love')";
      title.textContent = "parts[0].split('lie').popall";

      summary.appendChild(description);
      summary.appendChild(title);
      link.appendChild(summary);
      li.appendChild(link);
      galleryList.appendChild(li);
  }
});

document.getElementById('toggleButton_2020').addEventListener('click', function() {
  var carousel = document.getElementById('2020Carousel');
  var container = document.getElementById('imageContainer_2020');

  if (container.style.display === 'none') {
      container.style.display = 'block';
      carousel.style.display = 'none';
      this.textContent = '收起';
      loadImages(); // 懒加载图片
  } else {
      container.style.display = 'none';
      carousel.style.display = 'block';
      this.textContent = '展开';
  }
});

$('#2021Carousel').carousel({
  interval: 2000
})

document.addEventListener('DOMContentLoaded', function() {
  var images = ['img-1624977193215544f17a83a133e238675733b50bbbec6.jpg', 'img-1631722178830028a5d2fb5e48c01f79146edd05ba202.jpg', 'IMG_20211120_174554.jpg', 'mmexport1620556535866.jpg', 'mmexport1624804199056.jpg', 'mmexport1633182189320.jpg', 'mmexport1640433347353.jpg', 'mmexport1702822080341.jpg', 'mmexport1702822247260.jpg', 'mmexport1702822256074.jpg']; // 从服务器获取或者静态定义
  var totle_images = ['img-1624977173047dbc8e38f2cec7d115be9900273c7dcfc.jpg', 'img-1624977186870b6d08860a8580939d3932f458366c8c3.jpg', 'img-1624977193215544f17a83a133e238675733b50bbbec6.jpg', 'img-16296087060694553ca9cdaa407738364a0696593a4ac.jpg', 'img-1631722178830028a5d2fb5e48c01f79146edd05ba202.jpg', 'img-16341924617917888520a81b28569baa38f1573ee5dde.jpg', 'IMG_20210627_232719.jpg', 'IMG_20210627_232945.jpg', 'IMG_20211120_174554.jpg', 'mmexport1616426642317.jpg', 'mmexport1616426645345.jpg', 'mmexport1620556299655.jpg', 'mmexport1620556535866.jpg', 'mmexport1624804199056.jpg', 'mmexport1624804214052.jpg', 'mmexport1624804218850.jpg', 'mmexport1624804270292.jpg', 'mmexport1624804275764.jpg', 'mmexport1624807241610.jpg', 'mmexport1624807394764.jpg', 'mmexport1624807719852.jpg', 'mmexport1626790961696.jpg', 'mmexport1626795339171.jpg', 'mmexport1626795342049.jpg', 'mmexport1626795348887.jpg', 'mmexport1626795360065.jpg', 'mmexport1633182186331.jpg', 'mmexport1633182189320.jpg', 'mmexport1640433343154.jpg', 'mmexport1640433347353.jpg', 'mmexport1640433456684.jpg', 'mmexport1702822060599.jpg', 'mmexport1702822072321.jpg', 'mmexport1702822080341.jpg', 'mmexport1702822088661.jpg', 'mmexport1702822111206.jpg', 'mmexport1702822247260.jpg', 'mmexport1702822256074.jpg', 'mmexport1702822258965.jpg']
  var carouselInner = document.getElementById('2021CarouselInner');
  var carouselIndicators = document.getElementById('2021CarouselIndicators');
  var galleryList = document.getElementById('gallery_list_2021');

  for (var i = 0; i < images.length; i++) {
      var indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#2021Carousel');
      indicator.setAttribute('data-slide-to', i.toString());
      if (i === 0) indicator.className = 'active';

      var itemDiv = document.createElement('div');
      itemDiv.className = 'item' + (i === 0 ? ' active' : '');
      itemDiv.style = 'width:inherit; height:inherit; max-width:100%; max-height:100%;margin: auto;';
      var img = document.createElement('img');
      img.decoding ="async";
      img.style = 'width:inherit; height: inherit; object-fit:cover;margin: auto;';
      img.src = './images/2021/' + images[i];
      
      itemDiv.appendChild(img);
      carouselInner.appendChild(itemDiv);
      carouselIndicators.appendChild(indicator);
  }
  for (var i = 0; i < totle_images.length; i++){
    const li = document.createElement('li');
      li.className = 'one-third animate-box fadeIn animated-fast';
      li.setAttribute('data-animate-effect', 'fadeIn');
      li.style.backgroundImage = 'url(images/ayue/2021/' + totle_images[i] + ')';

      const link = document.createElement('a');
      link.href = "#";
      link.className = 'color-6';

      const summary = document.createElement('div');
      summary.className = 'case-studies-summary';
      // 你可以添加额外的描述和标题
      const description = document.createElement('span');
      const title = document.createElement('h2');

      // 假设图片名包含日期或描述
      // 如 "2022.01.01-新年祈福.jpg"
      // const parts = image.split('-');
      description.textContent = "parts[1].replace('ayue', 'love')";
      title.textContent = "parts[0].split('lie').popall";

      summary.appendChild(description);
      summary.appendChild(title);
      link.appendChild(summary);
      li.appendChild(link);
      galleryList.appendChild(li);
  }
});

document.getElementById('toggleButton_2021').addEventListener('click', function() {
  var carousel = document.getElementById('2021Carousel');
  var container = document.getElementById('imageContainer_2021');

  if (container.style.display === 'none') {
      container.style.display = 'block';
      carousel.style.display = 'none';
      this.textContent = '收起';
      loadImages(); // 懒加载图片
  } else {
      container.style.display = 'none';
      carousel.style.display = 'block';
      this.textContent = '展开';
  }
});

$('#2022Carousel').carousel({
  interval: 2000
})

document.addEventListener('DOMContentLoaded', function() {
  var images = ['img-1651593952992521aefdd00c3c0cc1e5847b4a6500723681d1ee41605806e7701d2e086d66d0d.jpg', 'IMG_20220312_151616.jpg', 'mmexport1634710690748.jpg', 'mmexport1634710694025.jpg', 'mmexport1642844875566.jpg', 'mmexport1643279135154.jpg', 'mmexport1662872644054.jpg', 'mmexport1666366318436.jpg', 'mmexport1666452284725.jpg', 'mmexport1666517528293.jpg', 'mmexport1666605589168.jpg', 'mmexport1666614507692.jpg', 'mmexport1669894106854.jpg', 'mmexport1669894113848.jpg', 'mmexport1702822333918.jpg']; // 从服务器获取或者静态定义
  var totle_images = ['img-1651593952992521aefdd00c3c0cc1e5847b4a6500723681d1ee41605806e7701d2e086d66d0d.jpg', 'img-16515939564157d93323bd18979ac45c0cd8c4afc2c3872e20a5d8dc0c28add6a35c9505ab0f9.jpg', 'img-16547763453832e07731cce209941ce2ae29c383039ba5c8d4d416b4860ed25722f1e3c0a3d7d.jpg', 'IMG_20220312_151616.jpg', 'IMG_20220410_185417.jpg', 'IMG_20220503_164434.jpg', 'mmexport1634710690748.jpg', 'mmexport1634710694025.jpg', 'mmexport1642844874470.jpg', 'mmexport1642844875566.jpg', 'mmexport1642844879692.jpg', 'mmexport1643279132976.jpg', 'mmexport1643279135154.jpg', 'mmexport1651584125369.jpg', 'mmexport1651584126765.jpg', 'mmexport1658052335495.jpg', 'mmexport1658052341833.jpg', 'mmexport1659260766448.jpg', 'mmexport1659260772550.jpg', 'mmexport1662872644054.jpg', 'mmexport1662872649459.jpg', 'mmexport1662873042737.jpg', 'mmexport1662874302228.jpg', 'mmexport1666366318436.jpg', 'mmexport1666366320983.jpg', 'mmexport1666366347425.jpg', 'mmexport1666366350078.jpg', 'mmexport1666366358005.jpg', 'mmexport1666366364623.jpg', 'mmexport1666366368607.jpg', 'mmexport1666366374848.jpg', 'mmexport1666419793632.jpg', 'mmexport1666421241560.jpg', 'mmexport1666452284725.jpg', 'mmexport1666517528293.jpg', 'mmexport1666605589168.jpg', 'mmexport1666614507692.jpg', 'mmexport1666614515718.jpg', 'mmexport1669894106854.jpg', 'mmexport1669894110230.jpg', 'mmexport1669894113848.jpg', 'mmexport1702822331311.jpg', 'mmexport1702822333918.jpg', 'mmexport1702822337173.jpg', 'mmexport1702822371000.jpg']
  var carouselInner = document.getElementById('2022CarouselInner');
  var carouselIndicators = document.getElementById('2022CarouselIndicators');
  var galleryList = document.getElementById('gallery_list_2022');

  for (var i = 0; i < images.length; i++) {
      var indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#2022Carousel');
      indicator.setAttribute('data-slide-to', i.toString());
      if (i === 0) indicator.className = 'active';

      var itemDiv = document.createElement('div');
      itemDiv.className = 'item' + (i === 0 ? ' active' : '');
      itemDiv.style = 'width:inherit; height:inherit; max-width:100%; max-height:100%;margin: auto;';
      var img = document.createElement('img');
      img.decoding ="async";
      img.style = 'width:inherit; height: inherit; object-fit:cover;margin: auto;';
      img.src = './images/2022/' + images[i];
      
      itemDiv.appendChild(img);
      carouselInner.appendChild(itemDiv);
      carouselIndicators.appendChild(indicator);
  }
  for (var i = 0; i < totle_images.length; i++){
    const li = document.createElement('li');
      li.className = 'one-third animate-box fadeIn animated-fast';
      li.setAttribute('data-animate-effect', 'fadeIn');
      li.style.backgroundImage = 'url(images/ayue/2022/' + totle_images[i] + ')';

      const link = document.createElement('a');
      link.href = "#";
      link.className = 'color-6';

      const summary = document.createElement('div');
      summary.className = 'case-studies-summary';
      // 你可以添加额外的描述和标题
      const description = document.createElement('span');
      const title = document.createElement('h2');

      // 假设图片名包含日期或描述
      // 如 "2022.01.01-新年祈福.jpg"
      // const parts = image.split('-');
      description.textContent = "parts[1].replace('ayue', 'love')";
      title.textContent = "parts[0].split('lie').popall";

      summary.appendChild(description);
      summary.appendChild(title);
      link.appendChild(summary);
      li.appendChild(link);
      galleryList.appendChild(li);
  }
});

document.getElementById('toggleButton_2022').addEventListener('click', function() {
  var carousel = document.getElementById('2022Carousel');
  var container = document.getElementById('imageContainer_2022');

  if (container.style.display === 'none') {
      container.style.display = 'block';
      carousel.style.display = 'none';
      this.textContent = '收起';
      loadImages(); // 懒加载图片
  } else {
      container.style.display = 'none';
      carousel.style.display = 'block';
      this.textContent = '展开';
  }
});

$('#2023Carousel').carousel({
  interval: 2000
})

document.addEventListener('DOMContentLoaded', function() {
  var images = ['IMG_20230101_104204.jpg', 'IMG_20230513_171635.jpg', 'mmexport1672565557617.jpg', 'mmexport1684332552787.jpg', 'mmexport1691303344124.jpg', 'mmexport1692491544193.jpg', 'mmexport1696502033643.jpg', 'mmexport1696599088769.jpg', 'mmexport1696741766190.jpg', 'mmexport1700364672294.jpg', 'Screenshot_2023-08-28-07-36-24-431_com.tencent.mm.jpg', '微信图片_20240101011548.jpg', '微信图片_20240101141110.jpg']; // 从服务器获取或者静态定义
  var totle_images = ['img-16296087574081a93264001e2b1285b2b6d4cd9db94e8.jpg', 'IMG_20230101_104204.jpg', 'IMG_20230101_173033.jpg', 'IMG_20230513_171617.jpg', 'IMG_20230513_171635.jpg', 'IMG_20230519_110730.jpg', 'mmexport1672565557617.jpg', 'mmexport1682255691005.jpg', 'mmexport1684332552787.jpg', 'mmexport1691303344124.jpg', 'mmexport1691649897003.jpg', 'mmexport1691932933285.jpg', 'mmexport1692464263903.jpg', 'mmexport1692464266402.jpg', 'mmexport1692491544193.jpg', 'mmexport1693212484317.jpg', 'mmexport1693657304134.jpg', 'mmexport1693657329660.jpg', 'mmexport1696502033643.jpg', 'mmexport1696516536261.jpg', 'mmexport1696599088769.jpg', 'mmexport1696741766190.jpg', 'mmexport1696741767634.jpg', 'mmexport1697080746731.jpg', 'mmexport1697379292091.jpg', 'mmexport1697905232731.jpg', 'mmexport1698568723750.jpg', 'mmexport1700364653125.jpg', 'mmexport1700364658239.jpg', 'mmexport1700364662572.jpg', 'mmexport1700364672294.jpg', 'mmexport1700364676901.jpg', 'Screenshot_2023-08-28-07-36-24-431_com.tencent.mm.jpg', 'shengqi2.jpg', '微信图片_20230101141125.jpg', '微信图片_20240101011527.jpg', '微信图片_20240101011542.jpg', '微信图片_20240101011546.jpg', '微信图片_20240101011548.jpg', '微信图片_20240101141103.jpg', '微信图片_20240101141110.jpg', '微信图片_20240101141113.jpg', '微信图片_20240101141116.jpg', '微信图片_20240101141119.jpg', '微信图片_20240101141122.jpg']
  var carouselInner = document.getElementById('2023CarouselInner');
  var carouselIndicators = document.getElementById('2023CarouselIndicators');
  var galleryList = document.getElementById('gallery_list_2023');

  for (var i = 0; i < images.length; i++) {
      var indicator = document.createElement('li');
      indicator.setAttribute('data-target', '#2023Carousel');
      indicator.setAttribute('data-slide-to', i.toString());
      if (i === 0) indicator.className = 'active';

      var itemDiv = document.createElement('div');
      itemDiv.className = 'item' + (i === 0 ? ' active' : '');
      itemDiv.style = 'width:inherit; height:inherit; max-width:100%; max-height:100%;margin: auto;';
      var img = document.createElement('img');
      img.decoding ="async";
      img.style = 'width:inherit; height: inherit; object-fit:cover;margin: auto;';
      img.src = './images/2023/' + images[i];
      
      itemDiv.appendChild(img);
      carouselInner.appendChild(itemDiv);
      carouselIndicators.appendChild(indicator);
  }
  for (var i = 0; i < totle_images.length; i++){
    const li = document.createElement('li');
      li.className = 'one-third animate-box fadeIn animated-fast';
      li.setAttribute('data-animate-effect', 'fadeIn');
      li.style.backgroundImage = 'url(images/ayue/2023/' + totle_images[i] + ')';

      const link = document.createElement('a');
      link.href = "#";
      link.className = 'color-6';

      const summary = document.createElement('div');
      summary.className = 'case-studies-summary';
      // 你可以添加额外的描述和标题
      const description = document.createElement('span');
      const title = document.createElement('h2');

      // 假设图片名包含日期或描述
      // 如 "2023.01.01-新年祈福.jpg"
      // const parts = image.split('-');
      description.textContent = "parts[1].replace('ayue', 'love')";
      title.textContent = "parts[0].split('lie').popall";

      summary.appendChild(description);
      summary.appendChild(title);
      link.appendChild(summary);
      li.appendChild(link);
      galleryList.appendChild(li);
  }
});

document.getElementById('toggleButton_2023').addEventListener('click', function() {
  var carousel = document.getElementById('2023Carousel');
  var container = document.getElementById('imageContainer_2023');

  if (container.style.display === 'none') {
      container.style.display = 'block';
      carousel.style.display = 'none';
      this.textContent = '收起';
      loadImages(); // 懒加载图片
  } else {
      container.style.display = 'none';
      carousel.style.display = 'block';
      this.textContent = '展开';
  }
});