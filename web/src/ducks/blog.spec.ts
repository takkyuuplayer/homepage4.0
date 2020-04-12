import reducer, { setBlogFeed } from './blog'

describe('ducks/blog', () => {
  const feeds = [{ title: '1', link: '2', published: '3' }]
  describe('actions', () => {
    it('has setBlogFeed', () => {
      expect(setBlogFeed(feeds)).toEqual({
        payload: feeds,
        type: 'SET_BLOG_FEED',
      })
    })
  })

  describe('reducer', () => {
    it('returns initial state', () => {
      expect(reducer(undefined, {} as any)).toStrictEqual([])
    })
    it('handles SET_BLOG_FEED action', () => {
      expect(reducer([], setBlogFeed(feeds))).toStrictEqual(feeds)
    })
  })
})
