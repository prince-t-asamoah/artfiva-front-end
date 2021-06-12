
function Input({style,type,name,text,value,classname,change}) {
    return(
        <>
            <input
                type={type}
                name={name}
                placeholder={text}
                value={value}
                className={`padMed ${classname}`}
                onChange={change}
                required                  
            />
        </>
    );
};

export default Input;