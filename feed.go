package main

import (
	"sort"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/mmcdole/gofeed"
)

type feedItems []*gofeed.Item

func (p feedItems) Len() int {
	return len(p)
}
func (p feedItems) Less(i, j int) bool {
	return p[i].UpdatedParsed.After(*p[j].UpdatedParsed)
}
func (p feedItems) Swap(i, j int) {
	p[i], p[j] = p[j], p[i]
}

var items []*gofeed.Item

func init() {
	atomFeeds := []string{
		"https://takkyuuplayer.blogspot.com/feeds/posts/summary",
		"http://takkyuuplayer.hatenablog.com/feed",
	}
	var items feedItems

	ch := make(chan []*gofeed.Item)
	for _, url := range atomFeeds {
		go fetch(url, ch)
	}
	for range atomFeeds {
		items = append(items, <-ch...)
	}

	sort.Sort(items)
}

func fetch(url string, ch chan<- []*gofeed.Item) {
	fp := gofeed.NewParser()

	feed, err := fp.ParseURL(url)
	if err != nil {
		ch <- nil
	}
	ch <- feed.Items
}

func feed() feedItems {
	return items
}

func main() {
	lambda.Start(feed)
}
