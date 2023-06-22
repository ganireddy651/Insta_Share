import {Component} from 'react'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class LogIn extends Component {
  state = {username: '', password: '', status: apiStatus.initial}

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onFormSubmit = async e => {
    e.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
  }

  renderData = () => {
    const {status} = this.state
    switch (status) {
      case apiStatus.success:
        return this.renderSuccessView()
      case apiStatus.failure:
        return this.renderFailureView()
      case apiStatus.in_progress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="login-container">
        <div className="login-image-container">
          <img
            className="login-image"
            src="https://res.cloudinary.com/dky69roxl/image/upload/v1687428143/Layer_2_yigitt.png"
            alt="website login"
          />
        </div>
        <form onSubmit={this.onFormSubmit} className="form-container">
          <div className="login-logo-container">
            <img
              className="login-logo"
              src="https://res.cloudinary.com/dky69roxl/image/upload/v1687411063/Standard_Collection_8_yc8kdx.svg"
              alt="website logo"
            />
            <p className="login-heading">Insta Share</p>
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              onChange={this.onChangeUsername}
              value={username}
              className="input"
              type="text"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <label className="label-text" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              onChange={this.onChangePassword}
              value={password}
              id="password"
              className="input"
              type="text"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        {this.renderData()}
      </div>
    )
  }
}
export default LogIn
