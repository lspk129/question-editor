import React, { Component } from 'react';
import { Grid, Row, Col, Empty } from './Grid';

class App extends Component {
  state = {
    rows: [
      { id: 'ybvtb', text: '' },
      { id: 'm23n4', text: '' },
    ],
    cols: [
      { id: '12345', text: '' },
      { id: 'awdwa', text: '' },
    ],
  };

  handleDelete = axis => (e) => {
    const cells = this.state[axis];
    const cellIndex = cells.findIndex(cell => cell.id === e.target.dataset[axis]);
    const newCellState = [
      ...cells.slice(0, cellIndex),
      ...cells.slice(cellIndex + 1),
    ];
    this.setState({ [axis]: newCellState });
  }

  handleAdd = axis => () => {
    const id = Math.random().toString(36).slice(-5);
    this.setState({
      [axis]: [...this.state[axis], { id }],
    });
  }

  renderRows = rows => rows.map(({ id, text }, index) => (
    <Row key={id}>
      <Col
        remove
        data-rows={id}
        onClick={this.handleDelete('rows')}
      >
          del
      </Col>
      <Col text>row{index + 1}</Col>
      {this.state.cols.map(col => <Col key={col.id}><input type="radio" /></Col>)}
    </Row>
  ))

  renderCols = cols => [
    <Row>
      <Empty />
      {cols.map(({ id, text }) => [
        <Col
          key={id}
          remove
          data-cols={id}
          onClick={this.handleDelete('cols')}
        >
          del
        </Col>,
      ])}
      <Col add onClick={this.handleAdd('cols')}>add</Col>
    </Row>,
    <Row>
      <Empty />
      {cols.map(({ id, text }, index) => [
        <Col text key={id}>col{index + 1}</Col>,
      ])}
    </Row>,
  ];

  render() {
    return (
      <Grid>
        {this.renderCols(this.state.cols)}
        {this.renderRows(this.state.rows)}
        <Row>
          <Col add onClick={this.handleAdd('rows')}>add</Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
