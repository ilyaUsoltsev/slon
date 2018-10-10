import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton'

class Discount extends Component {

    state={
        discountStart:0,
        discountEnd:6

    }

    percentage = () => {
        if(this.state.discountStart<this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart+1
            })
        }
    }

    incrementPercentage = ()=>{
        this.setState({
            discountStart: this.state.discountStart+1
        })
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },80)
    }

    render() {

        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={()=>this.percentage()}>
                        <div className="discount_porcentage">   
                                <span>{this.state.discountStart}&#176;</span>
                                <span>BeerPop</span>
                        </div>
                    </Fade>   
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>"Рок-н-ролл мертв, <br /> а слон еще нет..." </h3>
                            <MyButton
                                text="Добавь градус"
                                bck="#EE3F1F"
                                color="white"
                                onClick={this.incrementPercentage}
                            />
                            
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;