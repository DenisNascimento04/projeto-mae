import React, { useEffect, useState } from 'react';
import { IoMdArrowForward } from "react-icons/io";

import Heart from './assets/heart.png'
import Wave from './assets/wave.png'
import PT1_IMG1 from './assets/parte-1/IMG-1.jpg'
import PT1_IMG2 from './assets/parte-1/IMG-2.jpg'
import PT1_IMG3 from './assets/parte-1/IMG-3.jpg'
import PT1_IMG4 from './assets/parte-1/IMG-4.jpg'
import PT1_IMG5 from './assets/parte-1/IMG-5.jpg'
import PT1_IMG6 from './assets/parte-1/IMG-6.jpg'

import PT2_IMG0 from './assets/parte-2/IMG-0.jpg';
import PT2_IMG1 from './assets/parte-2/IMG-1.jpg';
import PT2_IMG2 from './assets/parte-2/IMG-2.jpg';
import PT2_IMG3 from './assets/parte-2/IMG-3.jpg';
import PT2_IMG4 from './assets/parte-2/IMG-4.jpg';
import PT2_IMG5 from './assets/parte-2/IMG-5.jpg';
import PT2_IMG6 from './assets/parte-2/IMG-6.jpg';
import PT2_IMG7 from './assets/parte-2/IMG-7.jpg';

import { Container, Flipper } from './styles';

type PropsMensagem = {
  id: number,
  img: string[],
  text: string
}

function App() {

  const [home ,setHome] = useState(true);
  const [parte1 ,setParte1] = useState(false);
  const [parte2 ,setParte2] = useState(false);
  const [pts ,setPTS] = useState(0);

  const [mensagem ,setMensagem] = useState(false);
  const [troca ,setTroca] = useState(false);
  const [contador ,setContador] = useState<number[]>([]);
  const [mensgemPricipal, setMensagemPricipal] = useState<PropsMensagem>({img: [], text: '', id: -1});

  const mensagens = [
    {
      id: 0,
      img: [PT1_IMG1],
      text: "Apesar de tudo e de não parecer, sua família te ama!"
    },
    {
      id: 1,
      img: [PT1_IMG2, PT1_IMG3],
      text: "Seus sublinhos te amam muito Tia Laine, Uaine e Ainde. A tia mais divertida do mundo."
    },
    {
      id: 2,
      img: [PT1_IMG4],
      text: `A pessoa mais carinhosa e cuidadosa que alguem pode conhecer, 
      sempre olhando para as pessoa com um brilho no olhar`
    },
    {
      id: 3,
      img: [PT1_IMG5, PT1_IMG6],
      text: `A pessoa mais divertida que vou conhecer na minha vida, 
      meu único motivo sincero de sorrir e dar risada.`
    }
  ]

  function Transicao1() {
    setHome(false);
    setParte1(true);
  }
  function Transicao2() {
    if (parte1) {
      setParte1(false);
      setParte2(true);
    }else{
      if (pts > 2) {
        setContador([]);
      }
      else{
        setPTS(pts+1);
      }
    }
  }

  function SetarMS(item:PropsMensagem, number: number) {
    if (!contador.includes(number)) {
      setContador([...contador, number]);
    }
    setTroca(true);
    setTimeout(() => {
      setMensagemPricipal(item);
    }, 500);
    setTimeout(() => {
      setTroca(false);
    }, 1500);
  }
  

  return (
    <Container>
      {home ? null : 
        <div className='background'>
          <img src={Wave} alt="wave" />
        </div>
      }
      {pts === 2 ? null: 
        <button className={`next ${contador.length === 4 ? 'on' : ''}`} onClick={() => Transicao2()}>
          <IoMdArrowForward color='#fff' size={28} />
        </button>
      }
      <div className={`home ${home ? "on" : "off"}`}>
        <button onClick={() => Transicao1()}>
          <img src={Heart} alt="heart"
          className='heart-home' />
        </button>
        <p>Click no coração</p>
      </div>

      <div className={`parte-1 ${parte1 ? "on" : "off"}`}>
        <div className={`mensagens ${mensagem? "on" : "off"} ${troca? 'troca' : ''}`} style={{ maxWidth: mensgemPricipal.img.length > 1 ? 600 : 400 }}>
          <div className="imgs">
            {mensgemPricipal.img.map((item, index) => (
              <img src={item} alt="img1" style={{ objectPosition: index === 1? 'top' : ''}} />
            ))}
          </div>
          <p>{mensgemPricipal.text}</p>
        </div>
        <div className={`hearts ${mensagem? "on" : "off"} ${parte1 ? "anime" : '' }`} onClick={() => setMensagem(true)}>
            <ul>
              {mensagens.map((item, index) => (
                <Flipper onClick={() => SetarMS(item, index)} className="flip-container">
                    <div className={`flipper ${contador.includes(index) ? "on" : ''}`}>
                      <div className="front">
                        <img src={Heart} alt="heart" className='hearts-img'/>           
                      </div>
                      <div className="back">
                        <div className="back-container">
                          <h1>{index}</h1>
                        </div>
                      </div>
                    </div>
                </Flipper>
              ))}
            </ul>
        </div>
      </div>

      <div className={`parte-2 ${parte2 ? "on" : "off"}`}>
        <div className={`pt1 ${pts === 0 ? 'on': ''}`}>
          <h1>Mãe,</h1>
          <p>
            Você é a melhor pessoa desse mundo, sempre se preocupando com 
            os outros mais do que com você e colcando a felicidade dos outros 
            acima da sua, pouca gente faz essas coisas como você.
          </p>
        </div>
        <div className={`pt2 ${pts === 1 ? 'on': ''}`}>
          <p>
            Nunca se esqueça...Eu te amo MUITO!!!
          </p>
          <p>
            Minha melhor amiga, minha mãe, minha inspiração e meu motivo de levantar todos os dias e não desistir de tudo.
          </p>
          <p>
            Ah...e não se preocupe serei mais criativo nas próximas lembrancinhas como essa kkkkkk.
          </p>
        </div>
        <div className={`pt-final ${pts === 2 ? 'on': ''}`}>

          <div className='left'>
            <div className={`foto ${pts === 2 ? "on" : ""}`}>
              <img src={PT2_IMG0} alt="" />
            </div>
            <div className={`foto ${pts === 2 ? "on" : ""}`}>
              <img src={PT2_IMG1} alt="" />
            </div>
            <div className={`foto ${pts === 2 ? "on" : ""}`}>
              <img src={PT2_IMG2} alt="" />
            </div>
          </div>

          <div className={`mid ${pts === 2 ? "on" : ""}`}>
            <div className="foto">
              <img src={PT2_IMG6} alt="" />
            </div>
            <div className="foto">
              <img src={PT2_IMG7} alt="" />
            </div>
            <div>
              <h1>TE AMO MOZONAAAA!!!!</h1>
              <h1>ESPERO QUE GOSTE!&#129392;</h1>
            </div>
          </div>

          <div className='right'>
            <div className={`foto ${pts === 2 ? "on" : ""}`}>
              <img src={PT2_IMG3} alt="" />
            </div>
            <div className={`foto ${pts === 2 ? "on" : ""}`}>
              <img src={PT2_IMG4} alt="" />
            </div>
            <div className={`foto ${pts === 2 ? "on" : ""}`}>
              <img src={PT2_IMG5} alt="" />
            </div>
          </div>
        </div>
      </div>


    </Container>
  );
}

export default App;
