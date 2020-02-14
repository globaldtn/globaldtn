import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'
import GoogleButton from 'react-google-button'
import "../styles/facebook.scss"

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faGem} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
            <h2 className="major">Inicie Sesión</h2>
          <form method="post" action="#">
                  <div className="form-group">
                    <label htmlFor="email">Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="Email"/>
                </div><br/>
                <div className="form-group">
                    <label htmlFor="passsword">Contraseña</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div><br/>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Mantener sesión</label>
                    </div>
                </div><br/>
                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                <p className="forgot-password text-righ"><br/>
                    <a href="#">Olvido su contraseña?</a>
                </p>
                <GoogleButton label='Inicie sesión con Google' onClick={() => { console.log('Google button clicked') }}/>
                <button id="facebook-button">Hola Mundo</button>
          </form>
            </div>
        </div>

    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
