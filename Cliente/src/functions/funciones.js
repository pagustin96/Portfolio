export const dotsGenerator = (contenedor) => {
  console.log(contenedor)
  const container = document.getElementById(contenedor)

  for(let i = 1; i <= 40; i++){
    const dot = document.createElement('div');

      if(i <= 10){
        dot.style.left = `${i * 9}%`
        dot.style.animationDelay = '0s';
        dot.style.bottom = '-150px'
      } else if(i > 10 && i <= 20){
       dot.style.left = `${(i - 10) * 9}%`
       dot.style.animationDelay = '0s';
       dot.style.bottom = '-150px'
      } else if(i > 20 && i <= 30) {
        dot.style.left = `${(i - 20) * 9}%`
        dot.style.animationDelay = '0s';
        dot.style.bottom = '-150px'
      } else if(i > 30 && i <= 40){
        dot.style.left = `${(i - 30) * 9}%`
        dot.style.animationDelay = '0s';
        dot.style.bottom = '-150px'
        
      }
      
      if(i <= 10){
        dot.classList.add('dot5');
      } else if( i <= 20) {
        dot.classList.add('dot6');
      } else if(i <= 30){
        dot.classList.add('dot7');
      } else if(i <= 40){
        dot.classList.add('dot8');
      }
      
      container.appendChild(dot);
  }
}