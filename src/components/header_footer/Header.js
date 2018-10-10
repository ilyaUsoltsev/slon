import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';
import shadows from '@material-ui/core/styles/shadows';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false

    }
    
    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll)
    }

    handleScroll = ()=>{
        if(window.scrollY>0){
            this.setState({
                headerShow:true
            })
        } else {
            this.setState({
                headerShow:false
            })
        }
    }

    toggleDrawer = (value)=>{
        this.setState({
            drawerOpen:value
        })
    }

    render() {
        return (
            <AppBar position="fixed" style={{
                backgroundColor: this.state.headerShow ? '#EE3F1F' : 'transparent',
                padding: '10px 10px',
                boxShadow: 'none'
            
            }}>
                
                <ToolBar>
                    <div className="header_logo"> 
                        <div className="font-mali header_logo_venue">МятыйСлон</div>
                        <div className="header_logo_title">BeerPop</div>
                    </div>

                    <IconButton
                        area-label="Menu" 
                        color="inherit"
                        onClick={()=>this.toggleDrawer(true)}
                    >


                        <MenuIcon/>
                    </IconButton>

                    <SideDrawer
                    open={this.state.drawerOpen}
                    onClose={(value)=>this.toggleDrawer(value)}
                    
                    />
                </ToolBar>
            </AppBar>
          
        );
    }
}

export default Header;