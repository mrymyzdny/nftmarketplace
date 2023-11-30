import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='community-section'>
            <div className='description'>
                <p>Stay In The <span>Community</span></p>
            </div>
         <div className='email'>
            <div href='#0'><i class="fa-solid fa-envelope-open"></i></div>
            <input type='text' placeholder='Business email...'></input>
            <button>Subscribe</button>
         </div>  
         <div className='links'>
            <div><i class="fa-solid fa-envelope"></i></div>
            <div><i class="fa-brands fa-tiktok"></i></div>
            <div><i class="fa-brands fa-discord"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-youtube"></i></div>
         </div>
        </div>
        
        <div className='footer-section'>
            <div className='left-footer'>
                <a  href='#0'><img className='main-logo' src='./images/main-logo.png' alt='logo'></img></a>
                <p>The world’s first and largest digital NFT marketplace for crypto collectibles & non fungible tokens (NFTs). Buy, sell, & discover exclusive digital items.</p>
            </div>
            <div className='right-footer'>
                <div>
                    <p>Marketplace</p>
                    <a href='#0'>Art</a>
                    <a href='#0'>Collectibles</a>
                    <a href='#0'> Domain Names</a>
                    <a href='#0'>Music</a>
                    <a href='#0'>Photography</a>
                    <a href='#0'>Sports</a>
                </div>
                <div>
                    <p>My Account</p>
                    <a href='#0'>Profiles</a>
                    <a href='#0'>Favorites</a>
                    <a href='#0'>Watchlist</a>
                    <a href='#0'>My Collection</a>
                    <a href='#0'>Settings</a>
                </div>
                <div>
                    <p>Resources</p>
                    <a href='#0'>Learn</a>
                    <a href='#0'>Help Center</a>
                    <a href='#0'>Platform Status</a>
                    <a href='#0'>Taxes</a>
                    <a href='#0'>Blog</a>
                </div>
            </div>
        </div>
    </div>
  )
}
