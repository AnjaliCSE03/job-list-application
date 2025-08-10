

const InputField = ({
    label,
    type,
    name,
    id,
    ...props
}) => {

    return (

        <div className="form-group">
            <label htmlFor={id}>
                {label}
            </label>
            <input 
            type={type}
            className="form-control"
            required
            autoComplete="off"
            id={id}
            name={name}
            {...props}
            />
        </div>

    )
}

export default InputField;
