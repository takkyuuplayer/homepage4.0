import * as React from "react";
import { FormattedDate } from "react-intl";

interface IHistoryItem {
    date: Date;
    title: string;
    url?: string;
}
export const HistoryItem: React.SFC<IHistoryItem> = (history) => {
    const line = [
        <span key="dummy" className="history-date">
            <FormattedDate value={history.date} year="numeric" month="2-digit" day="2-digit" />
        </span>,
        history.title,
    ];
    return history.url
        ? <li className="history-item"><a href={history.url} target="_blank">{line}</a></li>
        : <li className="history-item">{line}</li>;
};

export default (histories: ReadonlyArray<IHistoryItem>) =>
    histories.map((history) => <HistoryItem key={JSON.stringify(history)} {...history} />);
