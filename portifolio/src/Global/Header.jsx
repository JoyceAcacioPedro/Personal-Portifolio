import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className='header-wrapper'>
            <div className='header-container'>
                <div className='logo'>
                    <h2>Joyce<span>.</span></h2>
                </div>
                
                <nav className='nav'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutme">About Me</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Projects</Link></li> 
                        <li className='btn-pink'><Link to="/contact">Contact</Link></li>
                        <li className='btn-pink'><Link to="/blog">Blog</Link></li>
                    </ul> 
                </nav>
            </div>
        </header>
    );
}

export default Header;
