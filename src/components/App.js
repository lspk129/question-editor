import React, { Component } from 'react';
import styled from 'styled-components';
import { TransitionAll, TransitionRow, TransitionCol } from './Transition';
import { TableGrid, Row, Col, TextInput, TableSection } from './Table';
import Statistics from './Statistics';
import { ImageCell, Image } from './ImageCell';
import Legend from './Legend';
import deleteIcon from '../icons/ic_delete_forever_black_24px.svg';
import imageIcon from '../icons/ic_image_black_24px.svg';
import addIcon from '../icons/ic_add_circle_black_24px.svg';

const MainLayout = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: 5fr 3fr;
`;
class App extends Component {
  state = {
    rows: [
      { id: 'ybvtb', text: '', img: [], checked: [false, false] },
      { id: 'm23n4', text: '', img: [], checked: [false, false] },
    ],
    cols: [
      { id: '12345', text: '', img: [] },
      { id: 'awdwa', text: '', img: [] },
    ],
    title: '',
  };

  handleAdd = axis => () => {
    const id = Math.random().toString(36).slice(-5);
    if (axis === 'rows') {
      const checked = Array.from({ length: this.state.cols.length }, () => false);
      this.setState({ rows: [...this.state[axis], { id, text: '', img: [], checked }] });
    } else {
      const newState = this.state.rows;
      // eslint-disable-next-line array-callback-return
      newState.map(({ checked }, index) => { newState[index].checked = [...checked, false]; });
      this.setState({
        rows: newState,
        cols: [...this.state[axis], { id, text: '', img: [] }],
      });
    }
  };

  handleTextChange = axis => (e) => {
    const newState = this.state[axis];
    const cellIndex = newState.findIndex(cell => cell.id === e.target.dataset.input);
    newState[cellIndex].text = e.target.value;
    this.setState({ [axis]: newState });
  }

  handleDelete = (axis, index) => () => {
    if (this.state[axis].length < 2) return;
    if (axis === 'cols') {
      const newState = this.state.rows;
      // eslint-disable-next-line array-callback-return
      newState.map(({ checked }, i) => {
        newState[i].checked = [...checked.slice(0, index), ...checked.slice(index + 1)];
      });
      this.setState({ rows: newState });
    }
    const cells = this.state[axis];
    const newState = [...cells.slice(0, index), ...cells.slice(index + 1)];
    this.setState({ [axis]: newState });
  };

  handleFileChange = axis => (e) => {
    const newState = this.state[axis];
    const cellIndex = newState.findIndex(cell => cell.id === e.target.dataset.img);
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      newState[cellIndex].img = reader.result;
      this.setState({ [axis]: newState });
    };
    reader.readAsDataURL(file);
  };

  handleRadioChange = index => (e) => {
    const newState = this.state.rows;
    const rowIndex = newState.findIndex(({ id }) => id === e.target.dataset.radio);
    newState[rowIndex].checked = newState[rowIndex].checked.map(() => false);
    newState[rowIndex].checked[index] = !newState[rowIndex].checked[index];
    this.setState({ rows: newState });
  };

  handleTitleChange = e => this.setState({ title: e.target.value });

  renderDelete = rows => rows.map(({ id }, index) => (
    <Col
      key={`${id}-del`}
      icon={deleteIcon}
      data-rows={id}
      onClick={this.handleDelete('rows', index)}
    />
  ));

  renderRows = rows => rows.map(({ id, text }, index) => (
    <Col text key={`${id}-rows`}>
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
    <Row key={`${id}-cols`}>
      <Col
        icon={deleteIcon}
        data-cols={id}
        onClick={this.handleDelete('cols', index)}
      />
      {img.length
        ? <Image src={img} />
        : <ImageCell change={this.handleFileChange('cols')} id={id} icon={imageIcon} />
      }
      <Col text>
        <TextInput
          size={text === '' ? 6 : text.length + 1}
          data-input={id}
          type={'text'}
          value={text}
          placeholder={`col${index + 1}`}
          onChange={this.handleTextChange('cols')}
        />
      </Col>
      {this.state.rows.map(({ id: rowId, checked }) => (
        <Col key={`${rowId}-radio`}>
          <input
            data-radio={rowId}
            type={'radio'}
            checked={checked[index]}
            onClick={this.handleRadioChange(index)}
          />
        </Col>
      ))}
    </Row>
  ));

  render() {
    const { rows, cols, title } = this.state;
    return (
      <MainLayout>
        <TableSection main>
          <TableSection title>
            <h2>Question Editor</h2>
            <TextInput
              question
              size={title === '' ? 30 : title.length + 5}
              type={'text'}
              placeholder={'Enter title of the question'}
              onChange={this.handleTitleChange}
              value={this.state.title}
            />
          </TableSection>
          <TableGrid size={cols.length + 4}>
            <Row>
              <TransitionRow>
                {this.renderDelete(rows)}
                <Col add onClick={this.handleAdd('rows')} icon={addIcon} />
              </TransitionRow>
            </Row>
            <Row>
              <TransitionRow>
                {rows.map(({ id, img }) => (img.length
                  ? <Image key={`${id}-img`} src={img} />
                  : <ImageCell
                    key={`${id}-img`}
                    id={id}
                    icon={imageIcon}
                    change={this.handleFileChange('rows')}
                  />
                ))}
              </TransitionRow>
            </Row>
            <Row>
              <TransitionRow>
                {this.renderRows(rows)}
              </TransitionRow>
            </Row>
            <TransitionCol>
              {this.renderCols(cols)}
            </TransitionCol>
            <Row>
              <Col add onClick={this.handleAdd('cols')} icon={addIcon} />
            </Row>
          </TableGrid>
        </TableSection>
        <Statistics state={this.state} />
        <Legend />
      </MainLayout>
    );
  }
}

export default App;
