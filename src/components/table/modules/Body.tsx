import * as React from 'react';

export interface IBodyProps {
  dataSource: any[];
  columns: any[];
}

export default class Body extends React.Component<IBodyProps> {
  static defaultProps = {
    columns: [],
    dataSource: []
  }

  renderTd(tr: React.ReactNode): React.ReactNode {
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

  renderBody(): React.ReactNode {
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
