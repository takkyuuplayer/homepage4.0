import * as React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import createHistoryItems, { IHistoryItem } from "./HistoryItems";

interface IBlog {
    histories: IHistoryItem[];
}

const Blog: React.SFC<IBlog> = ({ histories }) => (
    <article className="history">
        <h4><FormattedMessage id="navigation.blog" /></h4>
        <hr />
        <ul className="list-unstyled">
            {createHistoryItems(histories)}
        </ul>
    </article>
);

const mapStateToProps = (state: any) => ({
    histories: state.blog.map((entry: any) => ({
        date: new Date(entry.published),
        title: entry.title,
        url: entry.link,
    }) as IHistoryItem),
});

export default connect(mapStateToProps)(Blog);
