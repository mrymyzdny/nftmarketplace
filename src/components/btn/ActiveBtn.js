import './ActiveBtn.css'

export default function ActiveBtn (props) {
    return (
        <button className='active'>{props.icon} {props.content}</button>
    )
}