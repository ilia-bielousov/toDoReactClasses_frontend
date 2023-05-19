import { Component } from "react";
import { Col, ListGroupItem } from "react-bootstrap";
import markedNote from './../../assets/images/markedNote.png';
import nomarkedNote from './../../assets/images/nomarkedNote.png';

import './appListItem.scss'

class AppListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      over: false
    };
  }

  changeStyleTrash = () => {
    this.setState(({ over }) => { return { over: !over } });
  }

  render() {
    const { over } = this.state;
    const { checked, deleteItem, checkItem, value } = this.props;

    return (
      <>
        <ListGroupItem as="li" className="list__item d-flex align-items-center">
          <Col sm={1} xs={2} className="d-grid">
            <span className="list__done" onClick={checkItem}>
              <img src={checked ? markedNote : nomarkedNote} alt="note" />
            </span>
          </Col>
          <Col sm={10} xs={8} className="d-grid">
            <p className="list__text"> {value}</p>
          </Col>
          <Col sm={1} xs={2} className="d-grid">
            <span className="list__delete" onClick={deleteItem} onMouseEnter={this.changeStyleTrash} onMouseLeave={this.changeStyleTrash}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity={over ? 1 : 0.3} clipPath="url(#clip0_116_185)">
                  <path
                    d="M7.99999 25.3333C7.99999 26.8 9.19999 28 10.6667 28H21.3333C22.8 28 24 26.8 24 25.3333V9.33333H7.99999V25.3333ZM10.6667 12H21.3333V25.3333H10.6667V12ZM20.6667 5.33333L19.3333 4H12.6667L11.3333 5.33333H6.66666V8H25.3333V5.33333H20.6667Z"
                    fill="#B30B04" />
                </g>
                <defs>
                  <clipPath id="clip0_116_185">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Col>
        </ListGroupItem>
      </>
    )
  }
}

export default AppListItem;