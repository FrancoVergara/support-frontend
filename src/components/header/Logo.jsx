import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'

const Logo = ({font,center}) => {
    return (
        <div className={`d-flex flex-row ${center ? 'justify-content-center' : ''}`}>
            <FontAwesomeIcon
                icon={faGears}
                size='2x'
                className={`${font} me-2 text-info align-self-center`}
            />
            <p className={`${font ? font : 'fs-4'} mb-0`}>BackOffice</p>
        </div>
    );
}
 
export default Logo;