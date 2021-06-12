function Icon({type, classname}) {
    return(
        <i className={`fi fi-rr-${type} padMed ${classname}`}></i>
    )
}

export default Icon;