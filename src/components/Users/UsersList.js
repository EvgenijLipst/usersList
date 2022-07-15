import './UsersList.css'
import Card from '../UI/Card';

const UsersList = (props) => {
    return (
        <Card className="users">
            <ul>
                {props.users.map(user => (<li>{user.name} - {user.age} лет</li>))}
            </ul>
        </Card>
    )
}

export default UsersList;