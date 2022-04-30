let exec1vez = 0

function comecarProgresso() {
let minhaDiv = document.querySelector("#container2")
let alturaDiv = minhaDiv.offsetHeight //pega a altura da div
let alturaJanela = window.innerHeight //pega a altura da janela
let posicaoDiv = minhaDiv.getBoundingClientRect().top // pega o valor do scroll

if(posicaoDiv < (alturaDiv/2)){
  let circulosProgresso = [
    ["circle1b", 70],
    ["circle2b", 50],
    ["circle3b", 45],
    ["circle4b", 35],
    ["circle5b", 20],
    ["circle6b", 70]
  ]
  for(let i = 0; i < circulosProgresso.length; i++){
    let circulos = document.getElementById(circulosProgresso[i][0])
    circulos.style.strokeDashoffset = 320 - (320 * circulosProgresso[i][1]) / 100
  }
    
  while(exec1vez == 0) {
    let htmlCount = 0
    let htmlInterval = setInterval(() => {
      htmlCount++
      document.getElementById("html").innerHTML = `${htmlCount}%`

      if(htmlCount >= 70){
        clearInterval(htmlInterval)
      } 
    }, 75)

    let cssCount = 0
    let cssInterval = setInterval(() => {
      cssCount++
      document.getElementById("css").innerHTML = `${cssCount}%`

      if(cssCount >= 50){
        clearInterval(cssInterval)
      } 
    }, 95)

    let jsCount = 0
    let jsInterval = setInterval(() => {
      jsCount++
      document.getElementById("js").innerHTML = `${jsCount}%`

      if(jsCount >= 45){
        clearInterval(jsInterval)
      } 
    }, 100)

    let phpCount = 0
    let phpInterval = setInterval(() => {
      phpCount++
      document.getElementById("php").innerHTML = `${phpCount}%`

      if(phpCount >= 35){
        clearInterval(phpInterval)
      } 
    }, 130)

    let mysqlCount = 0
    let mysqlInterval = setInterval(() => {
      mysqlCount++
      document.getElementById("mysql").innerHTML = `${mysqlCount}%`

      if(mysqlCount >= 20){
        clearInterval(mysqlInterval)
      } 
    }, 200)

    let wpCount = 0
    let wpInterval = setInterval(() => {
      wpCount++
      document.getElementById("wordpress").innerHTML = `${wpCount}%`

      if(wpCount >= 70){
        clearInterval(wpInterval)
      } 
    }, 75)

    exec1vez++
    }
  }
}

//ROALGEM SUAVE////////////////////////////////////////////////

const menuItems = document.querySelectorAll('#menu a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 50;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});


function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 800;

  
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 120);
}