import React, { useEffect, useState } from 'react'
import '../styles/home.css'



export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    tresDe()
    dotsGenerator()
    mouseSun()
    setTimeout(() => {
      setIsLoaded(true);
    }, 0);


  },[])
const $ = selector => document.querySelector(selector)
const tresDe = () => {
  

  const container = $('.wrapper')
  const center = $('.ticket')

  const { width, height} = container.getBoundingClientRect()
  const halfWidth = width/2
  const halfHeight = height/2

  container.addEventListener('mousemove', event => {
    center.style.transition = 'none'
    const { offsetX, offsetY} = event
    const rotationX =((offsetX - halfWidth) / halfWidth) * 15
    const rotationY =((offsetY - halfHeight) / halfHeight) * 15

    center.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`

  })

  container.addEventListener('mouseleave', () => {
    center.style.transition = 'transform .5s ease-in-out'
    center.style.transform = 'rotateX(0deg) rotateY(0deg)'
  })
}

const dotsGenerator = () => {
  const container = document.querySelector('.dots')

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
        dot.classList.add('dot');
      } else if( i <= 20) {
        dot.classList.add('dot2');
      } else if(i <= 30){
        dot.classList.add('dot3');
      } else if(i <= 40){
        dot.classList.add('dot4');
      }
      
      container.appendChild(dot);
  }
}

const mouseSun = () => {// Obtén el contenedor del sol
const sunContainer = document.getElementById('sun-container');
const container = $('.home-container')


const { width, height} = container.getBoundingClientRect()


// Escucha el evento 'mousemove' en el documento
document.addEventListener('mousemove', (event) => {
  // Obtiene las coordenadas del mouse
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calcula la posición del sol basada en las coordenadas del mouse
  const sunPositionX = mouseX / width
  const sunPositionY = mouseY / height

  // Actualiza el fondo del contenedor del sol con el gradiente radial
  sunContainer.style.background = `radial-gradient(circle at ${sunPositionX * 100}% ${sunPositionY * 100}%, #fff 0.5%, #ffdb4d 5%, transparent 70%)`;
  sunContainer.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

   // Calcula la posición de la sombra para seguir el cursor 
    //background: radial-gradient(circle at center,#10151D, #ffdb4d);
   const shadowX = mouseX / width
   const shadowY = mouseY /height
   
   // Ajusta la sombra en función de la posición del cursor
   sunContainer.style.boxShadow = `${shadowX}px ${shadowY}px 100px rgba(255, 255, 0, 0.5)`;
});}

const scrollToComponentInferior = () => {
  // Buscamos el elemento del componente inferior utilizando un ID o una referencia
  const componenteInferior = document.getElementById('about');

  // Verificamos si el elemento existe
  if (componenteInferior) {
    // Hacemos que la página se desplace hacia el elemento inferior
    componenteInferior.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
  <div className='home-container' id='home'>
    <div className='btn-contact-container' ><button className='btn-explore' onClick={scrollToComponentInferior}>Explora mi mundo</button><button className='btn-contact'>Contactame</button></div>
    <div className='wrapper' >
      <div className='ticket'>
     
      <h1 className={`texto-h1`}>
        AGUSTIN SANCHEZ</h1>
      <h3 className={`texto-h3 ${isLoaded ? 'loaded' : ''}`}>{`< FULLSTACK WEB DEVELOPER />`}</h3>
      <div className="bg-style"></div>
      </div>
    </div>
    <div className="dots">
    </div>
    <div id="sun-container"></div>
    
  </div>
  
  )
}
