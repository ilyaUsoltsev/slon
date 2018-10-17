import React, { Component } from 'react';
import Tilt from 'react-tilt';
import el from './el.jpg';
import misli from './msc/misli.mp3'
import oskolki from './msc/oskolki.mp3'
import skuchau from './msc/skuchau.mp3'
import zver from './msc/zver.mp3'
import osen from './msc/osen.mp3'
import pohmel from './msc/pohmel.mp3'
import zaberi from './msc/zaberi.mp3'
import intro from './msc/intro.mp3'
import ugli from './msc/ugli.mp3'
import groza from './msc/groza.mp3'
import spichki from './msc/spichki.mp3'
import tonnel from './msc/tonnel.mp3'
import _ from 'lodash';


const songs =  [{song: "Мысли", mp3:misli},
      {song: "Осколки", mp3:oskolki},
      {song: "Скучаю", mp3:skuchau},
      {song: "Зверь", mp3:zver},
      {song: "Осень", mp3:osen},
      {song: "Похмельная", mp3:pohmel},
      {song: "Забери", mp3:zaberi},
      {song: "Интро", mp3:intro},
      {song: "Угли", mp3:ugli},
      {song: "Гроза", mp3:groza},
      {song: "Спички", mp3:spichki},
      {song: "Тоннель", mp3:tonnel}]

const slonWords = ["'В кунсткамере был, а слона не видал.'", "'В маленькой сушилке слона не высушишь.'","'Здоров, как слон.'",
"'Из большого осла все не выйдет слона.'", "'Слон родился, слон и есть.'", "'От слона бежать никому не зазорно.'", "'Лай собак слонов не испугает.'"]

const ErrAnswers = ["Это неправильный ответ! Попробуйте еще раз!","Нет! Повнимательнее послушайте отрывок еще раз!",
"Странно, что вы не угадали! Это известный хит Слона!"]

const Answers = ["Это правильный ответ! Вы, явно наш фанат!" ,  "Абсолютно верно!", "Бинго, это правильный ответ!"]
    

class Logo extends Component {
  constructor() {
    super();
    this.audio = React.createRef();
    this.state = {
      randomSongs: _.sampleSize(songs, 4),
      color: "",
      afteranswer: slonWords[Math.floor(Math.random()*slonWords.length)],      
      answer: Math.floor(Math.random()*4),      
       
    } 

  } 
 
  onClickEvent = (e) => {
    e.preventDefault()
        
    if (e.target.id==this.state.answer)
        {
        this.setState({
                        afteranswer:Answers[Math.floor(Math.random()*3)],
                        color: "green"
                      })
      }    
    else {
        this.setState({
                        afteranswer:ErrAnswers[Math.floor(Math.random()*3)],
                        color:"dark-red"
                      })
        }        
      }

  refresh = (e) => {
    e.preventDefault();             
    this.setState({afteranswer: slonWords[Math.floor(Math.random()*slonWords.length)],
                  color:"",
                  randomSongs: _.sampleSize(songs, 4),
                  answer: Math.floor(Math.random()*4),
        },()=>{this.refs.audio.pause();
                this.refs.audio.load();
            });
    }            

     arrSongs = () => (
        this.state.randomSongs.map((song,i)=>(
            <div className="flex center" >   
                <button className="f6 grow no-underline br-pill ba bw2 ph2 pv2 mb2 dib bg-orange dark-green" id={i} onClick={this.onClickEvent}>←</button>
                <label className =" tc  f5 pa2">{song.song}</label>
             </div>            
        ))
    );
                    

  render() {   
    return (
        <div className='bl bw6 b--black-10 w-60 'style={{ height: 700, width: 300}}>
           <Tilt className="pt2 pb3 flex center" options={{ max : 25, speed:2000, scale: 1.05,perspective: 300 }} style={{ height: 250, width: 250 }} >
             <div className="Tilt-inner"> <img src={el} alt="elephant" height="250" width="250"/> </div>            
          </Tilt>     
          <form className="db flex flex-column flex items-center " >
            <div className="db flex flex-column flex items-center ">
                <h2> Угадай мелодию!</h2>
            </div>
            <audio controls ref="audio" >              
              <source src= {this.state.randomSongs[this.state.answer].mp3}  type="audio/mp3" /> 
            </audio>
          <button className=" mt3 pt3 f6 link dim br3 ph4 pv2 mb1 dib white bg-orange" onClick={this.refresh}> Еще раз! </button> <br/>
          </form>
          <div className=" items-start pl3 flex-wrap"> 
             {this.arrSongs()}
          </div>  
          <h1 className={" tc pa2 pb4 b f5 fw6 db no-underline underline-hover "+ this.state.color}>{this.state.afteranswer} </h1>     
        </div>      
    );
  }
}

export default Logo;





