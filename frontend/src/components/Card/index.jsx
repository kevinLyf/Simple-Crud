import { UserCard, Span } from './style'
import { FaUserAlt, FaEnvelope, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa'
const Card = ({ name, email, birth, tel }) => {
    return(
        <UserCard>
            <Span>
                <FaUserAlt  size="25" />
                <p>{name}</p>
            </Span>

            <Span>
                <FaEnvelope  size="25" />
                <p>{email}</p>
            </Span>

            <Span>
                <FaCalendarAlt  size="25" />
                <p>{birth}</p>
            </Span>
            <Span>
                <FaPhoneAlt  size="25" />
                <p>{tel}</p>
            </Span>
        </UserCard>
    )
}
export default Card;