import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSignout } from '../actions/authAction';

const Navigation = ({ history }) => {
    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState(false);
    const authData = useSelector(state => state.auth);
    const { isAuthenticated, user } = authData;

    let menuRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setDropdown(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [menuRef])

    // handleDropdown 
    const handleDropdown = () => {
        setDropdown(!dropdown)
    }
    //Logout 
    const logout = () => {
        dispatch(userSignout())
        setDropdown(false)
    }
    //console.log(authData);
    return (
        isAuthenticated ?
            <nav className="navbar">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Coinvest</Link>
                </div>
                <ul className="nav">
                    <li><Link className="navlink" to="/watchlist">Watchlist</Link></li>
                    <li><Link className="navlink" to="/create/watchlist">Create watchlist</Link></li>
                    <li><Link className="navlink" to="/">Dashboard</Link></li>
                    <li ref={menuRef} className="signout">
                        <span className="btn-user-drop-down" onClick={handleDropdown}><i className="far fa-user-circle"></i></span>
                        {dropdown &&
                            <ul className="nav-dropdown">
                                <li className="user-email">{user.email}</li>
                                <li className="divider"></li>
                                <li className="btn-signout" onClick={logout}>Signout</li>
                            </ul>
                        }
                    </li>
                </ul>
            </nav>
            : null
    )
}

export default Navigation
