import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import createHistoryItems from './HistoryItems'

const histories = [
  { date: new Date('2018/11/01'), title: 'Homepage Renewal' },
  {
    date: new Date('2015/02/12'),
    title: 'Web App Bank 公開',
    url: 'http://takkyuuplayer.github.io/',
  },
  {
    date: new Date('2014/12/01'),
    title: '一人アドベントカレンダー 開始',
    url: 'http://takkyuuplayer.hatenablog.com/entry/2014/12/02/010000',
  },
  { date: new Date('2013/02/16'), title: 'プライベート図書館 Pribrary 公開' },
  {
    date: new Date('2013/06/15'),
    title: 'Twitter Bootstrap 利用にデザイン変更',
  },
  { date: new Date('2011/06/04'), title: 'レイアウト更新に伴うサーバー移転' },
  { date: new Date('2011/03/21'), title: '当てったー追加' },
  { date: new Date('2010/06/18'), title: 'AutoIE追加' },
  { date: new Date('2010/05/09'), title: 'Java＞twitter追加' },
  { date: new Date('2009/11/04'), title: 'Java＞mixi_checker追加' },
  { date: new Date('2009/10/25'), title: 'Java＞mixc バージョンUP' },
  { date: new Date('2009/03/31'), title: 'Java＞mixc 追加' },
  { date: new Date('2009/03/11'), title: 'Java＞Gufa バージョンUP' },
  { date: new Date('2009/03/01'), title: 'Java＞Gufa バージョンUP' },
  { date: new Date('2009/02/25'), title: 'Java＞Gufa バージョンUP' },
  { date: new Date('2008/11/23'), title: 'Java＞Gufa バージョンUP' },
  { date: new Date('2008/08/01'), title: 'Java＞Gufa バージョンUP' },
  { date: new Date('2008/06/14'), title: 'Java＞Gufa バージョンアップ' },
  { date: new Date('2008/05/17'), title: 'Java＞Gufa 追加' },
  { date: new Date('2007/12/07'), title: 'Java＞Sta6DView バージョンUP' },
  { date: new Date('2007/11/27'), title: 'Java＞Sta6DView 追加' },
  { date: new Date('2007/04/18'), title: 'レポート置き場のセキュリティ向上' },
  { date: new Date('2007/03/21'), title: '数学王国→問17,18追加' },
  { date: new Date('2007/03/06'), title: '物理学科→レポート置き場に変更' },
  { date: new Date('2007/03/02'), title: '掲示板追加' },
  {
    date: new Date('2007/02/10'),
    title: '物理学科＞物理ゼミ＞全解答例一部訂正',
  },
  { date: new Date('2007/02/10'), title: '数学教室＞円に内接する四角形追加' },
  { date: new Date('2007/02/10'), title: '数学教室＞固有ベクトル追加' },
  { date: new Date('2007/02/10'), title: '数学王国＞解答のページ追加' },
  { date: new Date('2007/01/16'), title: '物理学科＞数学Ａ更新' },
  { date: new Date('2007/01/16'), title: '物理学科＞物理ゼミ更新' },
  { date: new Date('2007/01/12'), title: '物理学科＞英語更新' },
  {
    date: new Date('2007/01/10'),
    title: '物理学科＞場の数理＞レポート訂正(２回目)',
  },
  { date: new Date('2006/12/25'), title: '物理学科＞場の数理＞レポート訂正' },
  {
    date: new Date('2006/12/20'),
    title: '物理学科＞数学Ａ＞線形空間・行列式演習訂正',
  },
  { date: new Date('2006/12/14'), title: '掲示板停止' },
  { date: new Date('2006/12/13'), title: '物理学科＞物理ゼミ更新' },
  { date: new Date('2006/12/13'), title: '物理学科＞数学Ａ更新' },
  { date: new Date('2006/12/13'), title: '物理学科＞場の数理更新' },
  { date: new Date('2006/12/13'), title: '物理学科＞実験１Ｂ更新' },
  { date: new Date('2006/12/08'), title: '物理学科＞物理ゼミ更新' },
  { date: new Date('2006/11/26'), title: '物理学科＞数学Ａ更新' },
  { date: new Date('2006/11/15'), title: '物理学科＞英語Ⅰ更新' },
  { date: new Date('2006/11/15'), title: '物理学科＞実験１Ｂ更新' },
  { date: new Date('2006/11/15'), title: '物理学科＞物理ゼミ更新' },
  { date: new Date('2006/10/27'), title: '物理学科＞実験１Ｂ更新' },
  { date: new Date('2006/10/25'), title: '物理学科＞実験１Ｂ更新' },
  { date: new Date('2006/09/30'), title: '物理学科＞物理ゼミ更新' },
  { date: new Date('2006/09/27'), title: 'Java更新' },
  { date: new Date('2006/09/23'), title: 'Java更新' },
  { date: new Date('2006/08/30'), title: 'ちょっと進化' },
  { date: new Date('2006/06/09'), title: '物理ゼミナール発信' },
  { date: new Date('2006/03/16'), title: '更新再開宣言' },
  { date: new Date('2005/07/30'), title: '更新中断宣言' },
  { date: new Date('2005/04/19'), title: '数学教室「おもりの原理」追加。' },
  { date: new Date('2005/03/28'), title: '数学教室「倍数判定」追加。' },
  { date: new Date('2005/03/17'), title: '数学教室「第１余弦定理」追加。' },
  {
    date: new Date('2005/03/10'),
    title: '不評なのでトップページとバナーを改変。',
  },
  {
    date: new Date('2005/03/09'),
    title: 'ソースコード失って開発できなくなったので「StudyTool」を一般公開。',
  },
  { date: new Date('2005/02/28'), title: '数学王国リニューアル。' },
  { date: new Date('2005/01/17'), title: '数学教室「ベクトルの外積」追加。' },
  { date: new Date('2005/01/05'), title: 'リンク追加' },
  { date: new Date('2004/12/30'), title: 'Cipherをバージョンアップ' },
  { date: new Date('2004/12/26'), title: 'リンク追加' },
  { date: new Date('2004/12/20'), title: 'PcEndをバージョンアップ' },
  { date: new Date('2004/12/19'), title: 'javaにソフト「Cipher」追加。' },
  { date: new Date('2004/11/14'), title: 'PcEndをバージョンアップ' },
  { date: new Date('2004/10/17'), title: '数学教室更新。' },
  { date: new Date('2004/10/17'), title: 'PcEndをバージョンアップ' },
  { date: new Date('2004/10/12'), title: 'PcEndをバージョンアップ' },
  { date: new Date('2004/10/08'), title: 'PcEndをバージョンアップ' },
  { date: new Date('2004/10/06'), title: 'javaにソフト追加。' },
  { date: new Date('2004/09/23'), title: 'バナー追加。リンクを強化。' },
  { date: new Date('2004/09/19'), title: 'ホームページの歴史を書き始める。' },
  { date: new Date('2004/09/19'), title: '数学教室更新。数学王国更新。' },
  { date: new Date('2004/04/17'), title: 'ホームページ作成開始' },
]

export default () => (
  <article className="history">
    <h4>
      <FormattedMessage id="top.history" />
    </h4>
    <hr />
    <ul className="list-unstyled">{createHistoryItems(histories)}</ul>
  </article>
)
