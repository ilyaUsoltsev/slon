import React, { Component } from 'react';

import Kostya from '../../resources/images/Kostya.jpg';
import Tema from '../../resources/images/Tema.jpg';
import Dima from '../../resources/images/Dima.jpg';
import Vadik from '../../resources/images/Vadik.jpg';
import Ilya from '../../resources/images/Ilya.jpg';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {


    state = {
        name:['Костян',"Тема","Димон","Вадим","Илья"],
        description:['Гитара, клавиши, чакмен, человек выросший на русском роке и отчаянно рвущийся из этого детства.',
        "Гитара, веселые кепки, разные соло, холост, часто пьян.",
        "Бас, гитара, голос. Теряет волю при звуках.",
        "Гармошка. Самый мощный участник коллектива и настоящий блюзмэн.",
        "Барабаннер. Настоящий интеллигентный панк."],

        images:[Kostya, Tema, Dima, Vadik, Ilya],
        delay:[500,250,50,250,500]
    }

    showMembers = ()=>(
        this.state.name.map((name,i)=>(
            <Zoom delay={this.state.delay[i]} key={i} >
             <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_img">
                        <img src={this.state.images[i]}></img>
                    </div>
                    <div className="pricing_title">
                        <p>{this.state.name[i]}</p>
                    </div>
                    <div className="pricing_description"> 
                        <p>{this.state.description[i]}</p>
                    </div>
                
                </div>
            </div>

            </Zoom>

        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h3>Команда</h3>
                    <div className="pricing_wrapper">
                        {this.showMembers()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;