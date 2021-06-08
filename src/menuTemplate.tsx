import strings from './stringValues';

export function Menu() {

    return (
        <div className="menu">
            <div className="jumbotron">
                <h1 className="display-4">Truck Express!</h1>
                <p className="lead">Nova Truck Express! aplikacija, posebej zasnovana za voznike tovornjakov, uporabniku prijazna in enostavna. </p>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="http://localhost:3000/pocivalisce">Truck Express</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/pocivalisce">Domov</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/profil">Profil</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/pocivalisca">Pocivalisca</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="http://localhost:3000/priljubljena">Priljubljena</a>
                            </li>
                        </ul>
                    </div>
                    <li className="navbar-nav ml-auto">
                        <a className="nav-link" href="http://localhost:3000/prijava">Prijava</a>
                    </li>
                    <li className="navbar-nav ml-auto">
                        <a className="nav-link" href="http://localhost:3000/seznam">Seznam uporabnikov</a>
                    </li>
                    <li className="navbar-nav ml-auto">
                        <a className="nav-link" href="http://localhost:3000/registracija">{strings.registracija}</a>
                    </li>
                </nav>
            </div>
        </div>
    );
}
export default Menu;