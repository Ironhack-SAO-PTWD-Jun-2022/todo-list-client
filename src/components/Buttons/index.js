import './styles.css';

export const Button = ({ children, color = 'primary', onClick }) => {
  return <button className={`btn ${color}`} onClick={onClick}>{children}</button>
}