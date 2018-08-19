import * as _ from "lodash";
import * as React from "react";

import { FormattedMessage } from "react-intl";
import { Table } from "reactstrap";

const BaseUri = `https://github.com/takkyuuplayer/homepage/raw/master/public/img/math`;

export default () => (
    <div>
        <h4><FormattedMessage id="math.class" /></h4>
        <ul>
            <li><a href={`${BaseUri}/lec_yogen.pdf`}>第一余弦定理</a></li>
            <li><a href={`${BaseUri}/lec_kansu.pdf`}>関数の対称点移動</a></li>
            <li><a href={`${BaseUri}/lec_circle.pdf`}>円に内接する四角形</a></li>
            <li><a href={`${BaseUri}/lec_senkei.pdf`}>固有ベクトル</a></li>
        </ul>
    </div>
);
