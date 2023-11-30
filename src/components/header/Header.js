import "./Header.css"

export default function Header () {
    return (
        <div>
            <div className="header-1">
                <div className="star-1-div"><img id="star-1" src="./images/star2.png" alt="star"></img></div>
                <h2 className="h-first">Discover</h2>
                <div className="title-group">
                    <h2 className="h-second">& Get Super</h2>
                    <p className="h-text">The Worlds Largest Digital Marketplace
                    For Crypto Collectibles And Non-Fungible
                    Tokens for worldwide.</p>
                </div>
                <h2 className="h-third">Digital Assets</h2>
                <div className="star-2-div"><img id="star-2" src="./images/star2.png" alt="star"></img></div>
            </div>
            
            <div className="header-2">
            <div className="iteck-img-1">
                    <img className="iteck-img-1" src="./images/header_12_2.png" alt="iteck-img"></img>
                    <div className="img-title-1">
                        <p>Cyber CloneX</p>
                        <p>Floor: 1.2 ETH</p>
                    </div>
                </div>
                <div className="column">
                    <img id="star-3" src="./images/star3.png" alt="star"></img>
                    <p id="column-title">How it Works</p>
                    <img id="linearrow" src="./images/header_12_linearrow.png" alt="linearrow"></img>
                    <img id="sampel-img" src="./images/header_12_3.png" alt="img"></img>
                </div>
                <div className="iteck-img-2">
                    <img className="iteck-img-2" src="./images/header_12_1.png" alt="iteck-img"></img>
                    <div className="img-title-2">
                        <p>Cyber CloneX</p>
                        <p>Floor: 1.2 ETH</p>
                    </div>
                </div>
            </div>
        </div>
    )
}