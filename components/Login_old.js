import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Login extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="Login" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

         <article id="Login" className={`${this.props.article === 'Login' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Login.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Login