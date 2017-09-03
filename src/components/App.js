import React, { Component } from 'react';
import { Grid, Row, Col, TextInput } from './styles';
import { ImageCell, Image } from './ImageCell';

class App extends Component {
  state = {
    rows: [
      { id: 'ybvtb', text: '', img: [] },
      { id: 'm23n4', text: '', img: [] },
    ],
    cols: [
      { id: '12345', text: '', img: [] },
      { id: 'awdwa', text: '', img: [] },
    ],
  };

  handleAdd = axis => () => {
    const id = Math.random().toString(36).slice(-5);
    this.setState({
      [axis]: [...this.state[axis], { id, text: '', img: [] }],
    });
  }

  handleTextChange = axis => (e) => {
    const cells = this.state[axis];
    const cellIndex = cells.findIndex(cell => cell.id === e.target.dataset.input);
    const newState = this.state[axis];
    newState[cellIndex].text = e.target.value;
    this.setState({ [axis]: newState });
  }

  handleDelete = axis => (e) => {
    const cells = this.state[axis];
    const cellIndex = cells.findIndex(cell => cell.id === e.target.dataset[axis]);
    const newCellState = [
      ...cells.slice(0, cellIndex),
      ...cells.slice(cellIndex + 1),
    ];
    this.setState({ [axis]: newCellState });
  };

  handleFileChange = axis => (e) => {
    const cells = this.state[axis];
    const cellIndex = cells.findIndex(cell => cell.id === e.target.dataset.img);
    const newState = this.state[axis];
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      newState[cellIndex].img = reader.result;
      this.setState({ [axis]: newState });
    };
    reader.readAsDataURL(file);
  };

  renderDelete = rows => rows.map(({ id }) => (
    <Col
      key={`${id}`}
      remove
      data-rows={id}
      onClick={this.handleDelete('rows')}
    >
      del
    </Col>
  ));

  renderRows = rows => rows.map(({ id, text }, index) => (
    <Col text key={id}>
      <TextInput
        size={text === '' ? 6 : text.length + 1}
        data-input={id}
        type={'text'}
        value={text}
        placeholder={`row${index + 1}`}
        onChange={this.handleTextChange('rows')}
      />
    </Col>
  ));

  renderCols = cols => cols.map(({ id, text, img }, index) => (
    <Row key={id}>
      {img.length
        ? <Image src={img} />
        : <ImageCell change={this.handleFileChange('cols')} id={id} />
      }
      <Col
        remove
        data-cols={id}
        onClick={this.handleDelete('cols')}
      >
        del
      </Col>
      <Col text key={id}>
        <TextInput
          size={text === '' ? 6 : text.length + 1}
          data-input={id}
          type={'text'}
          value={text}
          placeholder={`col${index + 1}`}
          onChange={this.handleTextChange('cols')}
        />
      </Col>
      {this.state.rows.map(col => <Col key={col.id}><input type="radio" /></Col>)}
    </Row>
  ));

  render() {
    return (
      <Grid size={this.state.cols.length + 4}>
        <Row>
          <Col space />
          <Col space />
          <Col space />
          {this.state.rows.map(({ id, img }) => (img.length
            ? <Image key={id} src={img} />
            : <ImageCell key={id} change={this.handleFileChange('rows')} id={id} />))}
          <Col add onClick={this.handleAdd('rows')} >add</Col>
        </Row>
        <Row>
          <Col space />
          <Col space />
          <Col space />
          {this.renderDelete(this.state.rows)}
        </Row>

        <Row>
          <Col space />
          <Col space />
          <Col space />
          {this.renderRows(this.state.rows)}
        </Row>

        {this.renderCols(this.state.cols)}
        <Row>
          <Col add onClick={this.handleAdd('cols')} >add</Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
