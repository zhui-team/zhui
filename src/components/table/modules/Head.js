import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Head extends PureComponent {
  static propTypes = {
    columns: PropTypes.array.isRequired,
  }

  static defaultProps = {
    columns: []
  }

  renderHead() {
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
