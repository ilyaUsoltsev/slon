import React, { Component } from 'react';
import skuchayu from '../../resources/music/Скучаю.mp3'
import groza from '../../resources/music/Гроза.mp3'
import spichki from '../../resources/music/Спички.mp3'
import _ from 'lodash';
import MyButton from '../utils/MyButton';
import Logo from '../../resources/images/logo.jpg';

const songs = [
    {name:'Гроза', mp3:groza},
    {name:'Скучаю', mp3:skuchayu},
    {name:'Спички', mp3:spichki}
];

const wrongAnswers = ['плохо','неправильно'];

const correctAnswer = 'Well done!'

class index extends Component {
    constructor(){
        super()
        this.audio = React.createRef();
        this.state={
            songsSample: _.sampleSize(songs,2),
            answer: Math.floor(Math.random()*2), 
            gameState:true,
            message:''
        };
    }
    

    newGame = ()=>{
        this.setState({
        songsSample: _.sampleSize(songs,2),
        answer: Math.floor(Math.random()*2),
        gameState:true,
        message:'',
        },()=>{this.refs.audio.pause();
                this.refs.audio.load();
            });
    }; 

    checkAnswer = (e) =>{
        if(e.target.id==this.state.answer){
            console.log('correct')
            this.setState({message:correctAnswer, gameState:false});
    }else{
        console.log('not correct');
        this.setState({message:wrongAnswers[0], gameState:false});
        }
    };

    listOptions=() => (
        this.state.songsSample.map((song,i)=>(
            <div>
                <button id={i} onClick={this.checkAnswer}>X</button>
                <label>{song.name}</label>
            </div>
            
        ))
    );

    render() {
        return (
            <div className="center_wrapper" style={{textAlign:"center"}}>
                <h1>Угадай Мелодию</h1>
                <img src={Logo} style={{maxWidth:"50px"}}></img>
                <div>   
                    <audio controls ref="audio">              
                        <source src= {this.state.songsSample[this.state.answer].mp3}  type="audio/mp3" />            
                    </audio>
                </div>
                <div>
                    {this.listOptions()}
                </div>

            </div>
        );
    }
}

export default index;