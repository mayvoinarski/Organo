import './TextField.css'

const TextField = (props) => {

    // let valueEvent = '' 

    const typed = (event) => {
        props.changed(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valueEvent} onChange={typed} required={props.required} placeholder={`${props.placeholder}...`} />
        </div>
    )
}

export default TextField;