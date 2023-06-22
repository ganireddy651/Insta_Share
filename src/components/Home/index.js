import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-page-container">
          <h1>Ganesh</h1>
        </div>
      </>
    )
  }
}

export default Home
