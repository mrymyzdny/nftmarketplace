import './NFTcart.css'

export default function NFTcart (props) {
    return (
        <div className='carts'>
            <div className="cart">
                <p><i class="fa-solid fa-sort"></i>1.00</p>
                <img src={props.src} alt='nft'></img>
                <div className='nft-desc'>
                    <p>Highest bid <span>6/50</span></p>
                </div>
                <p className='nft-name'>{props.name}</p> 
                <div className='nft-details'>
                    <span><i class="fa-solid fa-user-group"></i>10+ Place Bit</span>
                    <span><i class="fa-solid fa-clock-rotate-left"></i>History</span>
                </div>
            </div>
        </div>
    )
}