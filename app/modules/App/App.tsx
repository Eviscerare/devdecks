import * as React from 'react';
import '@blueprintjs/core/dist/blueprint.css';

import {
  ToolBar
} from '..';

import TextBox from '../../plugins/TextBox/TextBox'


class App extends React.Component<{}, {}> {
  render() {
    return (
      // <ToolBar />
      <TextBox />
    );
  }
}

export { App };
