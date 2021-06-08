
function Button({click,classname,children,size}) {
    return(
        <button 
            onClick={click}
            className= {
                `button
                 round-large
                 indigo
                 ${size}
                 ${classname}`
            }
        >
            {children}
        </button>
    );
};

export default Button;