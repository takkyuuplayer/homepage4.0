import { withPrefix } from "gatsby-link";
import * as _ from "lodash";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Table } from "reactstrap";

const questions = _.range(0, 18).map((num: number) => {
    const key = num < 9 ? "0" + (num + 1) : (num + 1);
    return <tr key={key}>
        <td>
            <img src={withPrefix(`math/toi${key}.png`)} />
        </td>
        <td className="align-middle">
            <a href={withPrefix(`math/ans${key}.pdf`)}>
                <FormattedMessage id="math.answer" />
            </a>
        </td>
    </tr>;
});

export default () => (
    <div>
        <h4><FormattedMessage id="math.kingdom" /></h4>
        <p><FormattedMessage id="math.kingdom.message" /></p>
        <Table bordered>
            {questions}
        </Table>
    </div>
);
