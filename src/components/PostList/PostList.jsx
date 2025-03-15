import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts = [], users = [], comments = [] }) => (
  <div className="PostList">
    {posts.map(post => {
      // Searching for user who created post.
      const postUser = users.find(user => user.id === post.userId);
      // Look for comments that are belong to the post.
      const postComments = comments.filter(
        comment => comment.postId === post.id,
      );

      // pass this data to the PostInfo object.
      return (
        <PostInfo
          key={post.id}
          post={post}
          user={postUser}
          comments={postComments}
        />
      );
    })}
  </div>
);
