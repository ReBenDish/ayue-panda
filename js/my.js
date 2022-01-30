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
            swal("Gotcha!", "You caught the Snitch!", "success");
            break;
       
          default:
            swal("对不起!你永远是我最棒的彩蛋！Always");
        }
      });
}