import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './Projects.scss';
import img from '../../assets/Rectangle 44.png';
import { VscGithubAlt } from "react-icons/vsc";
import { IoIosGlobe } from "react-icons/io";

export function Projects() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

  // Função handleClick para controlar o flip de cada projeto individualmente
  const handleClick = (projectId) => {
    switch (projectId) {
      case 1:
        setIsFlipped1(!isFlipped1);
        break;
      case 2:
        setIsFlipped2(!isFlipped2);
        break;
      case 3:
        setIsFlipped3(!isFlipped3);
        break;
      case 4:
        setIsFlipped4(!isFlipped4);
        break;
      default:
        break;
    }
  };
  
  return (
    <>
      <section id="projects" className='container-projects'>
        <h2 className='title'>Nossos Projetos</h2>

        <div className='fil-1'>
          <div className='proj-1'>
            <Flipper flipKey={isFlipped1}>
              <Flipped flipId="front">
                <div className={`front ${isFlipped1 ? 'flipped' : ''}`}>
                  <img src={img} className='img'/>
                  <div className="container-desc">
                    <h2 className='txt-title'>Lemnos</h2>
                    <h3 className='txt-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est. Sed tempor auctor nisl, feugiat interdum velit hendrerit ut. </h3>
                  </div>
                </div>
              </Flipped>
              <Flipped flipId="back">
                <div className={`back ${isFlipped1 ? 'flipped' : ''}`}>
                  <img src={img} className='img'/>
                  <div className="container-nav">
                    <h2 className='txt-title'>Lemnos</h2>
                    <a href='' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                    <a href='' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                  </div>
                </div>
              </Flipped>
            </Flipper>
            <h2 className='txt-click' onClick={() => handleClick(1)}>Click Here →</h2>
          </div>

          <div className='proj-2'>
            <Flipper flipKey={isFlipped2}>
              <Flipped flipId="front">
                <div className={`front ${isFlipped2 ? 'flipped' : ''}`}>
                  <img src={img} className='img'/>
                  <div className="container-desc">
                    <h2 className='txt-title'>Mercury</h2>
                    <h3 className='txt-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est. Sed tempor auctor nisl, feugiat interdum velit hendrerit ut. </h3>
                  </div>
                </div>
              </Flipped>
              <Flipped flipId="back">
                <div className={`back ${isFlipped2 ? 'flipped' : ''}`}>
                  <img src={img} className='img'/>
                  <div className="container-nav">
                    <h2 className='txt-title'>Mercury</h2>
                    <a href='' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                    <a href='' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                  </div>
                </div>
              </Flipped>
            </Flipper>
            <h2 className='txt-click' onClick={() => handleClick(2)}>Click Here →</h2>
          </div>
        </div>

        <div className='fil-2'>
        <div className='proj-3'>
            <Flipper flipKey={isFlipped3}>
              <Flipped flipId="front">
                <div className={`front ${isFlipped3 ? 'flipped' : ''}`}>
                  <img src={img} className='img'/>
                  <div className="container-desc">
                    <h2 className='txt-title'>Alpha Speed</h2>
                    <h3 className='txt-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est. Sed tempor auctor nisl, feugiat interdum velit hendrerit ut. </h3>
                  </div>
                </div>
              </Flipped>
              <Flipped flipId="back">
                <div className={`back ${isFlipped3 ? 'flipped' : ''}`}>
                  <img src={img} className='img'/>
                  <div className="container-nav">
                    <h2 className='txt-title'>Alpha Speed</h2>
                    <a href='' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                    <a href='' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                  </div>
                </div>
              </Flipped>
            </Flipper>
            <h2 className='txt-click' onClick={() => handleClick(3)}>Click Here →</h2>
          </div>

          <div className='proj-4'>
            <Flipper flipKey={isFlipped4}>
              <Flipped flipId="front">
                <div className={`front ${isFlipped4 ? 'flipped' : ''}`}>
                  <img src={img} className='img'/>
                  <div className="container-desc">
                    <h2 className='txt-title'>Gym Infinite</h2>
                    <h3 className='txt-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est. Sed tempor auctor nisl, feugiat interdum velit hendrerit ut. </h3>
                  </div>
                </div>
              </Flipped>
              <Flipped flipId="back">
                <div className={`back ${isFlipped4 ? 'flipped' : ''}`}>
                  <img src={img} className='img'/>
                  <div className="container-nav">
                    <h2 className='txt-title'>Gym Infinite</h2>
                    <a href='' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                    <a href='' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                  </div>
                </div>
              </Flipped>
            </Flipper>
            <h2 className='txt-click' onClick={() => handleClick(4)}>Click Here →</h2>
          </div>
        </div>
      </section>
    </>
  )
}