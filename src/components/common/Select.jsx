import React, { Component } from 'react';
import Select from 'react-select';

class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'gray',
        padding: 5,
        fontSize: '16px',
       }),
       control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 250,
        background: 'white',
        height: 35,
        radius: 60,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center'
       }),
       singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
       }
    };
  }
  render() {
    const {options} = this.props;
    return (
      <Select
        value={''}
        onChange={() => console.log('hello')}
        options={options}
        styles={this.customStyles}
        components={{
          IndicatorSeparator: () => null
        }}
      />
    );
  }
}

export default SelectComponent;