import {Component} from 'react'
import Header from '../Header'
import './index.css'

class UserProfile extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="user-page-container">
          <h1>User Profile</h1>
        </div>
      </>
    )
  }
}

export default UserProfile
