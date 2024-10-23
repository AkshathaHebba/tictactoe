import './Box.css'
const Box = ({onClick,children}) => {
    return(
        <div className="box-container" onClick={onClick}>
            {children}
        </div>
    )
}
export default Box;