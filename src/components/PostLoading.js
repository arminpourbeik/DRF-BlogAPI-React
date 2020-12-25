function PostLoading(Component) {
  return function PostLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return <p style={{ fontSize: '25px' }}>loading...</p>
  }
}

export default PostLoading
