import {Component} from 'react'
import Header from '../Header'
import './index.css'

class MyProfile extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="profile-page-container">
          <h1>My Profile</h1>
        </div>
      </>
    )
  }
}

export default MyProfile
