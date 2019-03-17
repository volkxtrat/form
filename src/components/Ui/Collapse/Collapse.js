import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCollapse = styled.div`
  /* max-height: ${p => (p.isOpen ? "500px" : "0")}; */
  overflow: hidden;
  transition: all ${p => p.timeout}s ease-in;
`;

export default class Collapse extends PureComponent {
  state = {
    isOpen: this.props.isOpen
  };
  setContentRef = React.createRef();
  setContainerRef = React.createRef();
  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.isOpen !== this.props.isOpen &&
      nextProps.isOpen !== this.state.isOpen
    ) {
      this.toggle();
    }
  }
  componentDidMount() {
    this.updateHeight(this.state.isOpen);
  }

  componentDidUpdate() {
    this.updateHeight(this.state.isOpen);
  }

  updateHeight(isOpen) {
    this.lastRAF && cancelAnimationFrame(this.lastRAF);
    if (isOpen) {
      this.lastRAF = requestAnimationFrame(() => {
        const height = `${this.setContentRef.current.scrollHeight}px`;
        this.lastRAF = requestAnimationFrame(() => {
          this.lastRAF = requestAnimationFrame(() => {
            this.setContainerRef.current.style.height = height;
            this.lastRAF = null;
          });
        });
      });
    } else {
      this.setContainerRef.current.style.height = "0px";
    }
  }

  render() {
    const { isOpen, timeout, children, ...props } = this.props;
    return (
      <StyledCollapse
        ref={this.setContainerRef}
        timeout={timeout}
        isOpen={isOpen}
        {...props}
      >
        <div
          style={{ display: "flex", flexDirection: "column" }}
          ref={this.setContentRef}
        >
          {children}
        </div>
      </StyledCollapse>
    );
  }
}

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  timeout: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Collapse.defaultProps = {
  isOpen: false,
  timeout: 0.5
};
