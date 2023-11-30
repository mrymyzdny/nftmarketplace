import './UserTitle.css'

export default function UserTitle () {
    return (
        <div className='user-section'>
            <div className='title'>
                <img  src="./images/star2.png" alt="star"></img>
                <p>DISCOVER</p>
                <img  src="./images/star2.png" alt="star"></img>
            </div>
            <div className='description'>
                    <p>New NFT <span>Arrivals</span></p>
            </div>
        </div>
    )
}