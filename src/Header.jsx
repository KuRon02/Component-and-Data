function Header({image, title}) {
    return (
        <header>
            <img src={image} alt="Logo" />
            <h1>{title}</h1>
        </header>
    );
}

export default Header