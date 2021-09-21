let head = document.getElementById("display-text");
setTimeout(() => {
  head.innerText = "10";
  head.style.fontSize = "25px";
  setTimeout(() => {
    head.innerText = "9";
    head.style.fontSize = "30px";
    setTimeout(() => {
      head.innerText = "8";
      head.style.fontSize = "35px";
      setTimeout(() => {
        head.innerText = "7";
        head.style.fontSize = "40px";
        setTimeout(() => {
          head.innerText = "6";
          head.style.fontSize = "50px";
          setTimeout(() => {
            head.innerText = "5";
            head.style.fontSize = "60px";
            setTimeout(() => {
              head.innerText = "4";
              head.style.fontSize = "70px";
              setTimeout(() => {
                head.innerText = "3";
                head.style.fontSize = "80px";
                setTimeout(() => {
                  head.innerText = "2";
                  head.style.fontSize = "90px";
                  setTimeout(() => {
                    head.innerText = "1";
                    head.style.fontSize = "100px";
                    setTimeout(() => {
                      head.innerText = "Happy Independence Day!!!";
                      head.style.color = "white";
                      head.style.fontSize = "100px";
                      head.style.letterSpacing = "3px";
                      document.getElementsByTagName("body")[0].style.backgroundImage = "url(/img/flag.jpg)";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
