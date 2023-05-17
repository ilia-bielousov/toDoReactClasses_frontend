import { Component } from "react";
import { Col } from "react-bootstrap";
import './appListItem.scss'

class AppListItem extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <Col sm={1} xs={2} className="d-grid">
          <span className="list__done">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_116_188)">
                <path
                  d="M38.557 21.834L23.4 36.991L15.143 28.757L11.9 32L23.4 43.5L41.8 25.1L38.557 21.834ZM28 9C15.304 9 5 19.304 5 32C5 44.696 15.304 55 28 55C40.696 55 51 44.696 51 32C51 19.304 40.696 9 28 9ZM28 50.4C17.834 50.4 9.6 42.166 9.6 32C9.6 21.834 17.834 13.6 28 13.6C38.166 13.6 46.4 21.834 46.4 32C46.4 42.166 38.166 50.4 28 50.4Z"
                  fill="#D98326" />
              </g>
              <defs>
                <clipPath id="clip0_116_188">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </Col>
        <Col sm={10} xs={8} className="d-grid">
          <p className="list__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maxime.
          </p>
        </Col>
        <Col sm={1} xs={2} className="d-grid">
          <span className="list__delete">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3" clipPath="url(#clip0_116_185)">
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
      </>
    )
  }
}

export default AppListItem;