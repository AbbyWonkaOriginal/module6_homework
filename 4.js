let i = 0;

let id = setInterval(function () {
  i++;

  if (i == 10) {
    clearInterval(id);
  } else {
    console.log(i);
  }
}, 1000);