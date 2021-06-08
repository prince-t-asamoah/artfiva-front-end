
function Input({style,type,name,text,value,classname,change}) {
    return(
        <div style={style}>
            <input
                type={type}
                name={name}
                placeholder={text}
                value={value}
                className={`margin-bottom padding round-large ${classname}`}
                onChange={change}
                required                  
            />
        </div>
    );
};

export default Input;