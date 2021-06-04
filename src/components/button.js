
function Button({text, classname,onclick}) {
    return(
        <>
            <button 
                onClick={onclick}
                className={classname}
                > {text}
            </button>
        </>
    );
};

export default Button;