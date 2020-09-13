import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

const Sidebar = ({ menuToggle, handleMenuToggle}) => {
  
  const url = ""
  
  return (
    <aside
      className={
        menuToggle
          ? "sidebar activeBtn"
          : "sidebar"
      }
    >
      <img
        src="/static/close.png"
        alt="close"
        className={
          menuToggle
            ? "sidebar_close activeClose"
            : "sidebar_close"
        }
        onClick={handleMenuToggle}
      />
        <nav className="nav">
          <ul>
            <li className={
              (
                url.includes('ssjoker') ||
                url.includes('dkjoker') ||
                url.includes('tbjoker')
              )
                ? null : 'active'}>
              <Link 
                onClick={() => handleMenuToggle}
                href="/"
              >
                <a>Joker</a>
              </Link>
            </li>
            <li className={url.includes('ssjoker') ? 'active' : null}>
              <Link href="/ssjoker">
                <a>Suicide Squad</a>
              </Link>
            </li>
            <li className={url.includes('dkjoker') ? 'active' : null}>
              <Link href="/dkjoker">
                <a>Dark Knight</a>
              </Link>
            </li>
            <li className={url.includes('tbjoker') ? 'active' : null}>
              <Link href="/tbjoker">
                <a>Batman 1989</a>
              </Link>
            </li>
          </ul>
        </nav>
    </aside>
  )
}

Sidebar.propTypes = {
    menuToggle: PropTypes.bool.isRequired,
    handleMenuToggle: PropTypes.func.isRequired
}

export default withRouter(Sidebar);