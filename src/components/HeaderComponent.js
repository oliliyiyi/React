import React,{Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false 
        };
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            <div>
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className='mr-auto' href='/'/><img src='assets/images/logo.png' height='30' />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span className='fa fa-home fa-lg'></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className='fa fa-info fa-lg'></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/menu'><span className='fa fa-list fa-lg'></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className='fa fa-address fa-lg'></span> Contact US</NavLink>
                            </NavItem>
                           </Nav> 
                        </Collapse>
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
            </div>
            // <React.Fragment>
            //     <Navbar dark>
            //         <div className='container'>
            //             <NavbarBrand href="/">Ristrorante con Fusion</NavbarBrand>
            //         </div>
            //     </Navbar>
                
            //     <div className='Jumbotron' >
            //         <div className='container'>
            //             <div className='row row-header'>
            //                 <div className='col-12 col-sm-6'>
            //                     <h1>Ristrorante con Fusion</h1>
            //                     <p>We teake inspiration from the World's best cuisiness,and create a unique fusion experience</p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //  </React.Fragment>
        );
    }
}
export default Header;