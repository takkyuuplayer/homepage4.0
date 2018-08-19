import * as React from "react";
import { FormattedDate } from "react-intl";

const histories = [
    { date: new Date("2015/02/12"), content: "Web App Bank 公開", url: "http://takkyuuplayer.github.io/" },
    {
        content: "一人アドベントカレンダー 開始",
        date: new Date("2014/12/01"),
        url: "http://takkyuuplayer.hatenablog.com/entry/2014/12/02/010000",
    },
    { date: new Date("2013/02/16"), content: "プライベート図書館 Pribrary 公開" },
    { date: new Date("2013/06/15"), content: "Twitter Bootstrap 利用にデザイン変更" },
    { date: new Date("2011/06/04"), content: "レイアウト更新に伴うサーバー移転" },
    { date: new Date("2011/03/21"), content: "当てったー追加" },
    { date: new Date("2010/06/18"), content: "AutoIE追加" },
    { date: new Date("2010/05/09"), content: "Java＞twitter追加" },
    { date: new Date("2009/11/04"), content: "Java＞mixi_checker追加" },
    { date: new Date("2009/10/25"), content: "Java＞mixc バージョンUP" },
    { date: new Date("2009/03/31"), content: "Java＞mixc 追加" },
    { date: new Date("2009/03/11"), content: "Java＞Gufa バージョンUP" },
    { date: new Date("2009/03/01"), content: "Java＞Gufa バージョンUP" },
    { date: new Date("2009/02/25"), content: "Java＞Gufa バージョンUP" },
    { date: new Date("2008/11/23"), content: "Java＞Gufa バージョンUP" },
    { date: new Date("2008/08/01"), content: "Java＞Gufa バージョンUP" },
    { date: new Date("2008/06/14"), content: "Java＞Gufa バージョンアップ" },
    { date: new Date("2008/05/17"), content: "Java＞Gufa 追加" },
    { date: new Date("2007/12/07"), content: "Java＞Sta6DView バージョンUP" },
    { date: new Date("2007/11/27"), content: "Java＞Sta6DView 追加" },
    { date: new Date("2007/04/18"), content: "レポート置き場のセキュリティ向上" },
    { date: new Date("2007/03/21"), content: "数学王国→問17,18追加" },
    { date: new Date("2007/03/06"), content: "物理学科→レポート置き場に変更" },
    { date: new Date("2007/03/02"), content: "掲示板追加" },
    { date: new Date("2007/02/10"), content: "物理学科＞物理ゼミ＞全解答例一部訂正" },
    { date: new Date("2007/02/10"), content: "数学教室＞円に内接する四角形追加" },
    { date: new Date("2007/02/10"), content: "数学教室＞固有ベクトル追加" },
    { date: new Date("2007/02/10"), content: "数学王国＞解答のページ追加" },
    { date: new Date("2007/01/16"), content: "物理学科＞数学Ａ更新" },
    { date: new Date("2007/01/16"), content: "物理学科＞物理ゼミ更新" },
    { date: new Date("2007/01/12"), content: "物理学科＞英語更新" },
    { date: new Date("2007/01/10"), content: "物理学科＞場の数理＞レポート訂正(２回目)" },
    { date: new Date("2006/12/25"), content: "物理学科＞場の数理＞レポート訂正" },
    { date: new Date("2006/12/20"), content: "物理学科＞数学Ａ＞線形空間・行列式演習訂正" },
    { date: new Date("2006/12/14"), content: "掲示板停止" },
    { date: new Date("2006/12/13"), content: "物理学科＞物理ゼミ更新" },
    { date: new Date("2006/12/13"), content: "物理学科＞数学Ａ更新" },
    { date: new Date("2006/12/13"), content: "物理学科＞場の数理更新" },
    { date: new Date("2006/12/13"), content: "物理学科＞実験１Ｂ更新" },
    { date: new Date("2006/12/08"), content: "物理学科＞物理ゼミ更新" },
    { date: new Date("2006/11/26"), content: "物理学科＞数学Ａ更新" },
    { date: new Date("2006/11/15"), content: "物理学科＞英語Ⅰ更新" },
    { date: new Date("2006/11/15"), content: "物理学科＞実験１Ｂ更新" },
    { date: new Date("2006/11/15"), content: "物理学科＞物理ゼミ更新" },
    { date: new Date("2006/10/27"), content: "物理学科＞実験１Ｂ更新" },
    { date: new Date("2006/10/25"), content: "物理学科＞実験１Ｂ更新" },
    { date: new Date("2006/09/30"), content: "物理学科＞物理ゼミ更新" },
    { date: new Date("2006/09/27"), content: "Java更新" },
    { date: new Date("2006/09/23"), content: "Java更新" },
    { date: new Date("2006/08/30"), content: "ちょっと進化" },
    { date: new Date("2006/06/09"), content: "物理ゼミナール発信" },
    { date: new Date("2006/03/16"), content: "更新再開宣言" },
    { date: new Date("2005/07/30"), content: "更新中断宣言" },
    { date: new Date("2005/04/19"), content: "数学教室「おもりの原理」追加。" },
    { date: new Date("2005/03/28"), content: "数学教室「倍数判定」追加。" },
    { date: new Date("2005/03/17"), content: "数学教室「第１余弦定理」追加。" },
    { date: new Date("2005/03/10"), content: "不評なのでトップページとバナーを改変。" },
    { date: new Date("2005/03/09"), content: "ソースコード失って開発できなくなったので「StudyTool」を一般公開。" },
    { date: new Date("2005/02/28"), content: "数学王国リニューアル。" },
    { date: new Date("2005/01/17"), content: "数学教室「ベクトルの外積」追加。" },
    { date: new Date("2005/01/05"), content: "リンク追加" },
    { date: new Date("2004/12/30"), content: "Cipherをバージョンアップ" },
    { date: new Date("2004/12/26"), content: "リンク追加" },
    { date: new Date("2004/12/20"), content: "PcEndをバージョンアップ" },
    { date: new Date("2004/12/19"), content: "javaにソフト「Cipher」追加。" },
    { date: new Date("2004/11/14"), content: "PcEndをバージョンアップ" },
    { date: new Date("2004/10/17"), content: "数学教室更新。" },
    { date: new Date("2004/10/17"), content: "PcEndをバージョンアップ" },
    { date: new Date("2004/10/12"), content: "PcEndをバージョンアップ" },
    { date: new Date("2004/10/08"), content: "PcEndをバージョンアップ" },
    { date: new Date("2004/10/06"), content: "javaにソフト追加。" },
    { date: new Date("2004/09/23"), content: "バナー追加。リンクを強化。" },
    { date: new Date("2004/09/19"), content: "ホームページの歴史を書き始める。" },
    { date: new Date("2004/09/19"), content: "数学教室更新。数学王国更新。" },
    { date: new Date("2004/04/17"), content: "ホームページ作成開始" },
].map((history) => {
    const line = history.url
        ? <a href={history.url} target="_blank">
            <span className="list-date">
                <FormattedDate value={history.date} year="numeric" month="2-digit" day="2-digit" />
            </span>
            {history.content}
        </a>
        : <span>
            <span className="list-date">
                <FormattedDate value={history.date} year="numeric" month="2-digit" day="2-digit" />
            </span>
            {history.content}
        </span>;
    return <li key={history.date.toString() + history.content}>{line}</li>;
});

export default () => (
    <article className="history">
        <h4>History</h4>
        <hr />
        <ul className="list-unstyled">
            {histories}
        </ul>
    </article>
);
