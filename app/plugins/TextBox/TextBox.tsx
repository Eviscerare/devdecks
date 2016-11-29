import * as React from 'react';
import { EditableText as TextBoxInput } from '@blueprintjs/core';

class TextBox extends React.Component<{}, { value: string }> {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <TextBoxInput
        multiline
        onChange={(inputStr) => {
            this.setState({value: inputStr})
          }
        }
        onConfirm={(inputStr) => {
            // dispatch action
          }
        }
        value={this.state.value} />
    );
  }
}

export default TextBox;
