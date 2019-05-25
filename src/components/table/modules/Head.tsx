import * as React from 'react';

export interface IHeadProps {
  columns: any[];
}

export default class Head extends React.Component<IHeadProps> {
  static defaultProps = {
    columns: []
  }

  renderHead(): React.ReactNode {
    const { columns } = this.props;
    let ths = [];

    columns.forEach((th, index) => {
      ths.push(
        <th key={th.key || index} style={{ width: th.width }}>
          {th.title}
        </th>
      );
    });

    return <tr>{ths}</tr>;
  }

  render() {
    return (
      <thead className="zhui-table-thead">
        {this.renderHead()}
      </thead>
    );
  }
}
