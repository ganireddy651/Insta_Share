import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class UserStories extends Component {
  state = {status: apiStatus.initial, userStories: []}

  componentDidMount() {
    this.getUserStoryData()
  }

  getUserStoryData = async () => {
    // this.setState({status: apiStatus.in_progress})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'get',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(
      'https://apis.ccbp.in/insta-share/stories',
      options,
    )
    const data = await response.json()

    if (response.ok === true) {
      const convertedUserStories = data.users_stories.map(each => ({
        userId: each.user_id,
        userName: each.user_name,
        storyUrl: each.story_url,
      }))
      this.setState({
        userStories: convertedUserStories,
      })
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  render() {
    const {userStories} = this.state
    return (
      <div className="story-list-container">
        {/* <ui>
          {userStories.map(eachUser => (
            <li key={eachUser.userId}></li>
          ))}
        </ui> */}
      </div>
    )
  }
}

export default UserStories
