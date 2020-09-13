import PropTypes from 'prop-types'

const Header = ({ setMenuToggle}) => {
    
    return(
      <>
        <header>
          <a href="#" className="logo">
            <img src="/static/logo.png"/>
          </a>
          <div className="toggle">
            <img
              src="/static/toggle.png"
              alt="toggle"
              className="toggleBtn"
              onClick={() => setMenuToggle(true)}
            />
          </div>
        </header>
      </>
    )
  };

  Header.propTypes = {
    setMenuToggle: PropTypes.func.isRequired
  }
  
  export default Header;