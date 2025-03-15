import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post, user, comments = [] }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}
        <UserInfo user={user} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    {comments.length === 0 ? (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    ) : (
      <CommentList comments={comments} />
    )}
  </div>
);
