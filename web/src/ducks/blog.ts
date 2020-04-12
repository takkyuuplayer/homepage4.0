interface IBlogFeed {
  title: string
  link: string
  published: string
  [attr: string]: string
}

enum ActionTypes {
  SET_BLOG_FEED = 'SET_BLOG_FEED',
}

export const setBlogFeed = (feeds: IBlogFeed[]) => ({
  payload: feeds,
  type: ActionTypes.SET_BLOG_FEED as typeof ActionTypes.SET_BLOG_FEED,
})

export default (
  state: IBlogFeed[] = [],
  action: ReturnType<typeof setBlogFeed>
) => {
  switch (action.type) {
    case ActionTypes.SET_BLOG_FEED:
      return action.payload
    default:
      return state
  }
}
