import React, {useEffect} from 'react'
import { dotsGenerator } from '../functions/funciones'
import '../styles/about.css'

export const About = () => {

  useEffect(()=>{
    const titulo = document.getElementById('h2-title')
    const img = document.getElementById('img-perfil')
    //const ovni = document.getElementById('rocket')
    const expertise = document.getElementById('expertise')
    observerTitle.observe(titulo)
    observerImg.observe(img)
    //observerOvni.observe(ovni)
    observerExpertise.observe(expertise)
    dotsGenerator('dots2')

    const rocketElement = document.getElementById('rocket');
    rocketElement.addEventListener('animationend', () => {
      rocketElement.style.animation = 'rocket-float 4s linear infinite';
    });
    rocketElement.addEventListener('click', () => {
      rocketElement.style.animation = 'rocket-click 10s forwards';
    });

  },[])

  const cargarTitulo = (entradas, observador) => {
    entradas.forEach((entrada)=>{
      if(entrada.isIntersecting){
        entrada.target.classList.add('visible')
      } else {
        entrada.target.classList.remove('visible')
      }
    })
  }

  const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada)=>{
      if(entrada.isIntersecting){
        entrada.target.classList.add('img-visible')
        entrada.target.classList.remove('img-invisible')
      } else {
        entrada.target.classList.remove('img-visible')
        entrada.target.classList.add('img-invisible')
      }
    })
  }

  /*const cargarOvni = (entradas, observador) => {
    entradas.forEach((entrada)=>{
      if(entrada.isIntersecting){
        entrada.target.classList.add('rocket')
      } else {
        entrada.target.classList.remove('visible')
      }
    })
  }*/

  const cargarExpertise = (entradas, observador) => {
    entradas.forEach((entrada)=>{
      if(entrada.isIntersecting){
        entrada.target.classList.add('img-visible')
        entrada.target.classList.remove('img-invisible')
      } else {
        entrada.target.classList.remove('img-visible')
        entrada.target.classList.add('img-invisible')
      }
    })
  }

  const optionsTitle = {
    root: null,
    rootMargin: '0px 100px',
    threshold: .05,
  }

  const optionsImg = {
    root: null,
    rootMargin: '0px 100px',
    threshold: .75,
  }

  const observerImg = new IntersectionObserver(cargarImagen, optionsImg)

  const observerTitle = new IntersectionObserver(cargarTitulo, optionsTitle)

  //const observerOvni = new IntersectionObserver(cargarOvni, optionsTitle)

  const observerExpertise = new IntersectionObserver(cargarExpertise, optionsImg)

  
  return (
    <div className='about-container' id='about'>
      <div>
        <h2 className='h2-cont' id='h2-title' >Sobre Mi</h2>
      </div>
      <div className='' id='rocket'></div>
      <div className='half-container'>
        <div className='img-perfil-container' id='img-perfil-contenedor'>
          <img src="/Portfolio/build/img/perfil_bg.png" alt="perfil-img" className='img-perfil' id='img-perfil' data-animation='fade' />
        </div>
        <div className='exp-perfil-container' id='img-perfil-contenedor'>
          <div className='expertise-container'id='expertise'>
            <h3>👋 ¡Hola! Soy Agustin</h3>
            <p>Un apasionado programador con mas de dos años de experiencia en desarrollo web full stack, con un enfoque especial en el frontend. Actualmente, combino mis estudios en programación en la Universidad Tecnológica Nacional con la construcción de aplicaciones web.<br/>
            <br/>💼 Mi experiencia abarca la creación de aplicaciones web completas, desde la implementación del frontend hasta la configuración del backend. He trabajado principalmente con JavaScript, React, Node, Java y Springboot utilizando estas tecnologías para diseñar interfaces de usuario interactivas y atractivas. Mi habilidad en la utilización de estas herramientas me ha permitido crear experiencias de usuario fluidas y dinámicas.
</p>
          </div>
        </div>
      </div>      
      <div className="dots" id='dots2'>
      </div>
    
     
    </div>
  )
}
