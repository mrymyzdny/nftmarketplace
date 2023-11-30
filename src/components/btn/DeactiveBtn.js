import './DeactiveBtn.css'

export default function DeactiveBtn (props) {
    return (
        <button className='deactive'> {props.icon} {props.content}</button>
    )
}