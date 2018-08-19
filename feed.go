package main

import (
	"encoding/json"
	"net/http"
	"sort"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/mmcdole/gofeed"
)

type feedItems []*gofeed.Item

func (p feedItems) Len() int {
	return len(p)
}
func (p feedItems) Less(i, j int) bool {
	return p[i].PublishedParsed.After(*p[j].PublishedParsed)
}
func (p feedItems) Swap(i, j int) {
	p[i], p[j] = p[j], p[i]
}

var items feedItems

func init() {
	atomFeeds := []string{
		"https://takkyuuplayer.blogspot.com/feeds/posts/summary",
		"http://takkyuuplayer.hatenablog.com/feed",
	}

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

func router(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	switch req.HTTPMethod {
	case "GET":
		return feed(req)
	case "OPTIONS":
		return cors(req)
	default:
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusMethodNotAllowed,
			Body:       http.StatusText(http.StatusMethodNotAllowed),
		}, nil
	}
}

func cors(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusNoContent,
		Headers: map[string]string{
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Origin":  "*",
		},
	}, nil
}

func feed(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	body, err := json.Marshal(map[string]feedItems{"data": items})
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode:      http.StatusInternalServerError,
			Headers:         nil,
			Body:            err.Error(),
			IsBase64Encoded: false,
		}, err
	}
	return events.APIGatewayProxyResponse{
		StatusCode:      http.StatusOK,
		Headers:         nil,
		Body:            string(body),
		IsBase64Encoded: false,
	}, nil
}

func main() {
	lambda.Start(router)
}
