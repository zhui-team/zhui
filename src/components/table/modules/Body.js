import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Body extends PureComponent {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired
  }

  static defaultProps = {
    columns: [],
    dataSource: []
  }

  renderTd(tr) {
    let tds = [];

    Object.keys(tr).forEach(key => {
      if (key === 'key') return;
      tds.push(
        <td
          key={key}
        >
          {tr[key]}
        </td>
      );
    });

    return tds;
  }

  renderBody() {
    const { dataSource } = this.props;

    let trs = [];

    dataSource.forEach((tr, index) => {
      trs.push(
        <tr
          key={tr.key || index}
          className="zhui-table-row"
          data-row-key={tr.key}
        >
          {this.renderTd(tr)}
        </tr>
      );
    });

    return trs;
  }

  render() {
    return (
      <tbody className="zhui-table-tbody">
        {this.renderBody()}
      </tbody>
    );
  }
}
