import { NavLink } from 'react-router-dom'
import './styles.css';

export const Button = ({ children, color = 'primary', onClick }) => {
  return <button className={`btn ${color}`} onClick={onClick}>{children}</button>
}

export const NavButton = ({ children, color = 'primary', url }) => {
  return <NavLink className={`btn-nav ${color}`} to={url} end>{children}</NavLink>
}
