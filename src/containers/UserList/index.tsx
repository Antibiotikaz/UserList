
import Users from '../../components/Users'
import Pagination from '../../components/Pagination'
import classes from './UserList.module.scss'

const UserList = () => {

    return (
        <div className={classes.UserListContainer}>
          <Users/>
          <Pagination/>
       </div>
    )
}

export default UserList