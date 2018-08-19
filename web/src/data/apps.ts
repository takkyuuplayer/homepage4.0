import * as _ from "lodash";

const tsv = `title	status	type	url	publishedOn	version	lastUpdatedOn	env
PcEnd	inactive	standalone	pcend.zip	2004/10/06	1.05	2004/12/20	WindowsXP HomeEdition
Cipher	inactive	standalone	cipher.zip	2004/12/20	1.01	2004/12/30	WindowsXP HomeEdition
Gufa	inactive	standalone	gufa.zip	2008/05/17	2.03	2009/03/02	WindowsXP, Windows Vista
AutoIE	inactive	standalone	autoie.zip				WindowsXP, Windows Vista
mixc	inactive	standalone	mixc.zip	2009/03/31	1.10	2009/10/25	WindowsXP, Windows Vista
mixi_checker	inactive	standalone	mixi_checker.zip	2009/03/31	1.10	2009/10/25	WindowsXP, Windows Vista
Sta6DView	inactive	standalone					WindowsXP, Windows Vista
go-anki	active	web	https://github.com/takkyuuplayer/go-anki
github-inviter	active	web	https://github.com/takkyuuplayer/github-inviter#github-inviter
google-drive-transfer	active	web	https://github.com/takkyuuplayer/google-drive-transfer
anki	active	standalone	https://github.com/takkyuuplayer/anki
hackyou	active	web	https://github.com/takkyuuplayer/hackyou
hackme	active	web	https://github.com/takkyuuplayer/hackme				`;

const rows = tsv.split("\n").map((line: string) => line.trim().split("\t"));
const header = rows.shift();

const rowToAppRow = (row: typeof rows[0]) => {
    const zipped = _.zipObject(header, row);
    return Object.assign(
        {},
        zipped,
        {
            lastUpdatedOn: zipped.lastUpdatedOn === "" ? undefined : new Date(zipped.lastUpdatedOn),
            publishedOn: zipped.publishedOn === "" ? undefined : new Date(zipped.publishedOn),
        },
    );
};

export default rows.map((row) => _.zipObject(header, row));
