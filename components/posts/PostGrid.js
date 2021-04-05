import PostItem from './PostItem';

const PostGrid = ({posts}) => {
    const postItems = posts.map(post => <PostItem key={post.slug} post={post} />);
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {postItems}
        </div>
    )
}

export default PostGrid
