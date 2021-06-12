
function Button({click,classname,children}) {
    return(
        <button 
            onClick={click}
            className= {
                `button
                 round
                 bgIndigo
                 ripple
                 ${classname}`
            }
        >
            {children}
        </button>
    );
};

export default Button;