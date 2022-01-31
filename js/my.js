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