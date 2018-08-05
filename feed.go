package main

import (
	"encoding/json"
	"os"
	"sort"

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

func main() {
	fp := gofeed.NewParser()
	var items feedItems
	feed, err := fp.ParseURL("https://takkyuuplayer.blogspot.com/feeds/posts/summary")
	if err == nil {
		items = append(items, feed.Items...)
	}

	feed, err = fp.ParseURL("http://takkyuuplayer.hatenablog.com/feed")
	if err == nil {
		items = append(items, feed.Items...)
	}

	sort.Sort(items)

	json.NewEncoder(os.Stdout).Encode(items)
}
