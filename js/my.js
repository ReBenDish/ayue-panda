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
       
        //   case "defeat":
        //     swal("Pikachu fainted! You gained 500 XP!");
        //     break;
       
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

$(function() {

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
    setInterval(function() {
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
  
    }, 100);
  } 
  snowflake()
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
  
  
 })