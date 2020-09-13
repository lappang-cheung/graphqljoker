import PropTypes from 'prop-types'

const Header = ({ handleMenuToggle}) => {
    
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
              onClick={handleMenuToggle}
            />
          </div>
        </header>
      </>
    )
  };

  Header.propTypes = {
      handleMenuToggle: PropTypes.func.isRequired
  }
  
  export default Header;