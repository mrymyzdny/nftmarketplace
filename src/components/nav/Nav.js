import './Nav.css';
import ActiveBtn from '../btn/ActiveBtn';

export default function Nav() {
    return (
        <div className='navigation'>
          <div className='left'>
            <a  href='#0'><img className='main-logo' src='./images/main-logo.png' alt='logo'></img></a>
            <form role='search' className='search-box'>
              <button><i class="fa-solid fa-magnifying-glass"></i></button>
              <input type="search" placeholder="Search NFT" value="" name="s"></input>
            </form>
            <ul className='nav-items'>
              <li>Home</li>
              <li>Page</li>
              <li>Blog</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='right'>
            <span>Contact Us : </span>
            <div className='icon-group'>
              <a href='#0'><i class="fa-brands fa-twitter"></i></a>
              <a href='#0'><i class="fa-brands fa-discord"></i></a>
              <a href='#0'><i class="fa-brands fa-linkedin"></i></a>
            </div>
           <ActiveBtn icon= <i class="fa-solid fa-wallet"></i>  content= "Connect Wallet"/>
          </div>
        </div>
      );
}