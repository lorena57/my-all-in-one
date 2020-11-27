import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// class Nav extends Component {
//     constructor(props) {
//         super(props);
//     }

//     componentWillMount() {
//         this.props.notifyPathname(window.location.pathname);
//     }

//     render() {
//         return (
//             <div>
//                 {
//                     this.props.pathname === '/' ?
//                     <Link to="/create">Add new</Link>: ''
//                 }
//             </div>
//         )
//     }
// }

// export default Nav;

const Nav = () => {
    return(
        <StyledNav>
            <h1>
                <Link to="/">All in<span>One</span></Link>
            </h1>

            <ul>
                <li>
                    <Link to="/contact">Contacts  <span>/</span></Link>
                </li>

                <li>
                    <Link to="/grocery">Shopping  <span>/</span></Link>
                </li>

                <li>
                    <Link to="/note">Notes</Link>
                </li>
            </ul>
        </StyledNav>
    )

};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;

    a {
        color: black;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 1.0rem;
        position: relative;
    }
    span {
        position: relative;
        padding-left: 0.5rem;
        color: black;
    }
    h1 span {
        color: black;
    };
h1 span {
    // color: #2673ed;
    color: black;
}

span {
    position: relative;
    padding-left: 0.5rem;
    color: #2673ed;
}`

export default Nav;