// @flow

import * as React from 'react';

type State = {
  active: boolean,
};

type Props = {
  children: ({
    ref: React.Ref<React.ElementType>,
    active: boolean,
  }) => React.Node,
  onClickOutside: (event: MouseEvent) => void,
};

class ReactClick extends React.Component<Props, State> {
  state = {
    active: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.mousedown);
    document.addEventListener('mouseup', this.mouseup);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.mousedown);
    document.removeEventListener('mouseup', this.mouseup);
  }

  ref = React.createRef();

  mousedown = (event: MouseEvent) => {
    const { current } = this.ref;

    if (current !== null && !current.contains(event.target)) {
      this.setState({ active: true }, this.props.onClickOutside(event));
    }
  };

  mouseup = (event: MouseEvent) => {
    const { current } = this.ref;

    if (current !== null && !current.contains(event.target)) {
      this.setState({ active: false });
    }
  };

  render() {
    return this.props.children({ ref: this.ref, ...this.state });
  }
}

export default ReactClick;
