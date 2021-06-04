
function Input({ style, type, placeholder, name, value, onchange, classname, arialabel}) {
    return(
        <div style={style}>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                className={classname}
                onChange={onchange}
                aria-label={arialabel}
                required                  
            />
        </div>
    );
};

export default Input;