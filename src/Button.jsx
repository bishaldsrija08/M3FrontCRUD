const Button = (prop) => {
    return (
        <>
            <button style={{color: "red", backgroundColor: "lightgray"}} className="custom-button">{prop.content.name}</button>
        </>
    )
}

export default Button