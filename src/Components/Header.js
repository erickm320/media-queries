import React,{Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className="site-header">
                <nav className="navbar">
                    <h1 className="site-title">Start Bootstrap</h1>
                    <div className="navbar-menu">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;
