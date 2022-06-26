import React,{Component} from 'react';
import {Navbar, NavbarBrand, } from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className='container'>
                        <NavbarBrand href="/">Ristrorante con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                
                <div className='Jumbotron' >
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Ristrorante con Fusion</h1>
                                <p>We teake inspiration from the World's best cuisiness,and create a unique fusion experience</p>
                            </div>
                        </div>
                    </div>
                </div>
             </React.Fragment>
        );
    }
}
export default Header;