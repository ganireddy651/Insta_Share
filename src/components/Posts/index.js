import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
// import {FcLike} from 'react-icons/fc'

import './index.css'

const Posts = props => {
  const {each} = props
  const {
    profilePic,
    userName,
    likesCount,
    createdAt,
    postDetails,
    comments,
    userId,
  } = each

  const updatedPostDetails = {
    caption: postDetails.caption,
    imageUrl: postDetails.image_url,
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    const {history} = props
    history.replace('/login')
  }

  return (
    <li className="post-card">
      <div className="post-header">
        <Link to={`/users/${userId}`} className="link">
          <img className="profile" src={profilePic} alt="profile pic" />
        </Link>
        <Link to={`/users/${userId}`} className="link">
          <p className="username">{userName}</p>
        </Link>
      </div>
      <img
        className="post-image"
        src={updatedPostDetails.imageUrl}
        alt="post"
      />
      <div className="impressions-container">
        <BsHeart className="heart-icon" />
        <FaRegComment className="comment-icon" />
        <BiShareAlt className="share-icon" />
        <p className="likes-count">{likesCount} likes</p>
        <p className="caption">{updatedPostDetails.caption}</p>
        <ul className="comment-list_container">
          {comments.map(eachComment => (
            <li key={eachComment.user_id}>
              <p className="comment">
                <span className="span-text-comment">
                  {eachComment.user_name}
                </span>{' '}
                {eachComment.comment}
              </p>
            </li>
          ))}
        </ul>
        <p className="created-at">{createdAt}</p>
      </div>
    </li>
  )
}

export default withRouter(Posts)
