import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.user.authenticated)

  // show unauthorized screen if no user is found in redux store
  if (!isAuthenticated) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to='/'>Login</NavLink>
        </span>
      </div>
    )
  }

  // returns child route elements
  return <Outlet />
}
export default ProtectedRoute