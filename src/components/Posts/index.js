import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import {FcLike} from 'react-icons/fc'
// import Comments from '../Comments'
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
  } = each
  const updatedPostDetails = {
    caption: postDetails.caption,
    imageUrl: postDetails.image_url,
  }

  return (
    <li className="post-card">
      <div className="post-header">
        <img className="profile-pic" src={profilePic} alt="profile pic" />
        <p className="username">{userName}</p>
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

export default Posts
