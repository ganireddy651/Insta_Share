import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import UserStories from '../UserStories'
import Posts from '../Posts'
import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    status: apiStatus.initial,
    posts: [],
  }

  componentDidMount() {
    this.getPostsData()
  }

  onClickRetry = () => {
    this.getPostsData()
  }

  getPostsData = async () => {
    this.setState({status: apiStatus.in_progress})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(
      'https://apis.ccbp.in/insta-share/posts',
      options,
    )
    const data = await response.json()

    if (response.ok === true) {
      const convertedPostsData = data.posts.map(eachPost => ({
        postId: eachPost.post_id,
        profilePic: eachPost.profile_pic,
        userId: eachPost.user_id,
        userName: eachPost.user_name,
        likesCount: eachPost.likes_count,
        createdAt: eachPost.created_at,
        postDetails: eachPost.post_details,
        comments: eachPost.comments,
      }))
      console.log(convertedPostsData)
      this.setState({
        posts: convertedPostsData,
        status: apiStatus.success,
      })
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  renderPosts = () => {
    const {status} = this.state
    switch (status) {
      case apiStatus.success:
        return this.renderPostsSuccessView()
      case apiStatus.failure:
        return this.renderPostsFailureView()
      case apiStatus.in_progress:
        return this.renderPostsLoaderView()
      default:
        return null
    }
  }

  renderPostsSuccessView = () => {
    const {posts} = this.state
    // const {} = posts
    return (
      <>
        <ul className="posts-list-container">
          {posts.map(each => (
            <Posts each={each} key={each.postId} />
          ))}
        </ul>
      </>
    )
  }

  renderPostsFailureView = () => (
    <div className="home-failure-section">
      <img
        src="https://res.cloudinary.com/dky69roxl/image/upload/v1687496778/alert-triangle_qkgohb.svg"
        alt="alert Triangle"
      />
      <p>Something went wrong. Please try again</p>
      <button className="Retry-btn" onClick={this.onClickRetry} type="button">
        Retry
      </button>
    </div>
  )

  renderPostsLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <div className="home-page-container">
          <UserStories />
          <div className="posts-container">{this.renderPosts()}</div>
        </div>
      </>
    )
  }
}

export default Home
