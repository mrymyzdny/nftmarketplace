import './Users.css'

export default function User (props) {
    return (
        <div className='users-container'>
            <div className='user'>
                    <div>
                        <img  className='user-img' src={props.img} alt='user-img'></img>
                    </div>
                    <div className='user-info'>
                        <p className='user-name'>{props.username}</p>
                        <div>
                            <span>Rise: </span>
                            <span className='amount'> $ {props.rise}</span> 
                        </div>   
                    </div>
            </div>
        </div>
    )
}