import { url } from "inspector";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Alert } from "reactstrap";

const serverHistory = [
    {
        title: "Yahoo",
        url: "http://www.geocities.jp/takkyuuplayer/",
    },
    {
        title: "Infoseek",
        url: "http://takkyuuplayer.hp.infoseek.co.jp/",
    },
    {
        title: "land.to",
        url: "http://takkyuuplayer.ps.land.to/",
    },
    {
        title: "@PAGES",
        url: "http://www21.atpages.jp/takkyuuplayer/",
    },
    {
        title: "000webhost",
        url: "http://takkyuuplayer.netau.net/",
    },
    {
        title: "Amazon EC2",
        url: "https://aws.amazon.com/ec2/",
    },
    {
        title: "さくらVPS",
        url: "http://vps.sakura.ad.jp/",
    },
    {
        title: "Amazon SAM",
        url: "https://github.com/awslabs/serverless-application-model",
    },
];

const Histories = serverHistory.map(
    (link) => <a key={link.url} href={link.url} title={link.title}>{link.title}</a>,
).reduce((prev, elem) => prev.length === 0 ? [elem] : [...prev, <span> &rarr; </span>, elem], []);

export default () => (
    <div>
        <h4>
            <FormattedMessage id="welcome.title" />
        </h4>
        <p><FormattedMessage id="welcome.message1" /></p>
        <Alert className="text-center" color="secondary">{Histories}</Alert>
        <p><FormattedMessage id="welcome.message2" /></p>
        <p><FormattedMessage id="welcome.message3" /></p>
    </div>
);
