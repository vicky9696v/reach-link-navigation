import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    errorMsg: '',
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  loginForm = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitDataError = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  submitFormLogin = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.loginForm()
    } else {
      this.onSubmitDataError(data.error_msg)
    }
  }

  render() {
    const {errorMsg, showErrorMessage} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-container" onSubmit={this.submitFormLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-website"
          />
          <label htmlFor="username" className="label-text">
            USERNAME
          </label>
          <input
            id="username"
            type="text"
            onChange={this.onChangeUsername}
            className="input-text"
            placeholder="Username"
          />
          <label htmlFor="password" className="label-text">
            PASSWORD
          </label>
          <input
            id="password"
            type="password"
            onChange={this.onChangePassword}
            className="input-text"
            placeholder="Password"
          />
          <button type="submit" className="submit-button">
            Login
          </button>
          {showErrorMessage && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
