import './BtnGroup.css'
import ActiveBtn from '../btn/ActiveBtn'
import DeactiveBtn from '../btn/DeactiveBtn'

export default function BtnGroup () {
    return (
            <div className='btn-group'>
                <div className='title'>
                    <img  src="./images/star2.png" alt="star"></img>
                    <p>DISCOVER</p>
                    <img  src="./images/star2.png" alt="star"></img>
                </div>
                <div className='description'>
                    <p>New NFT <span>Arrivals</span></p>
                </div>
                <div className="btns">
                    <ActiveBtn icon= <img src="./images/star3.png" alt="star"></img> content="All Category" />
                    <DeactiveBtn icon= <img src="./images/star3.png" alt="star"></img> content="Art" />
                    <DeactiveBtn icon= <img src="./images/star3.png" alt="star"></img> content="Photography" />
                    <DeactiveBtn icon= <img src="./images/star3.png" alt="star"></img> content="Virtual Worlds" />
                </div>
            </div>
        )
}
        
