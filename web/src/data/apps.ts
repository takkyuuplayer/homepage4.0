import * as _ from "lodash";

const baseUri = "https://github.com/takkyuuplayer/homepage/raw/master/public/software";

const tsv = `title	status	type	url	publishedOn	version	lastUpdatedOn	env
PcEnd	inactive	standalone	pcend.zip	2004/10/06	1.05	2004/12/20	WindowsXP
Cipher	inactive	standalone	cipher.zip	2004/12/20	1.01	2004/12/30	WindowsXP
Gufa	inactive	standalone	gufa.zip	2008/05/17	2.03	2009/03/02	WindowsXP, Vista
AutoIE	inactive	standalone	autoie.zip				WindowsXP, Vista
mixc	inactive	standalone	mixc.zip	2009/03/31	1.10	2009/10/25	WindowsXP, Vista
mixi_checker	inactive	standalone	mixi_checker.zip	2009/03/31	1.10	2009/10/25	WindowsXP, Vista
Sta6DView	inactive	standalone					WindowsXP, Vista
go-anki	active	web	https://github.com/takkyuuplayer/go-anki#go-anki
github-inviter	active	web	https://github.com/takkyuuplayer/github-inviter#github-inviter
google-drive-transfer	active	web	https://github.com/takkyuuplayer/google-drive-transfer#google-drive-transfer
anki	active	standalone	https://github.com/takkyuuplayer/anki/archive/master.zip
hackme	active	web	https://github.com/takkyuuplayer/hackme#hackme-
hackyou	active	web	https://github.com/takkyuuplayer/hackyou#hackyou				`;
const rows = tsv.split("\n").map((line: string) => line.trim().split("\t"));
const header = rows.shift();

export enum AppStatuses {
    inactive = "inactive",
    active = "active",
}
export enum AppTypes {
    standalone = "standalone",
    web = "web",
}

export interface IAppData {
    title: string;
    status: string;
    type: string;
    url: string;
    publishedOn: Date;
    version: string;
    lastUpdatedOn: Date;
    env: string;
}

const rowToAppRow = (row: typeof rows[0]): IAppData => {
    const zipped = _.zipObject(header, row);
    return {
        env: zipped.env,
        lastUpdatedOn: zipped.lastUpdatedOn === "" ? undefined : new Date(zipped.lastUpdatedOn),
        publishedOn: zipped.publishedOn === "" ? undefined : new Date(zipped.publishedOn),
        status: zipped.status,
        title: zipped.title,
        type: zipped.type,
        url: zipped.url.startsWith("http") ? zipped.url : `${baseUri}/${zipped.url}`,
        version: zipped.version,
    };
};

export default rows.map(rowToAppRow);
