import {useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'
import Button  from './Button'

const Header = ({title, onAdd,showAdd}) => {
    const location = useLocation()
    return (
        <header className="header">
            <p>{title}</p>
            {location.pathname === '/' && (
              <Button 
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'close' : 'add'} 
                onClick={onAdd}
             />
            )}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Task Tracker'
}


export default Header
