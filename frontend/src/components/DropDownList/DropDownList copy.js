import React from 'react'
import Select from 'react-select'

export const DropDownList = ({ options, selectedValue, onValueChange, placeholder }) => {
	return (
		<div>
			<Select 
				options={options || []} 
				onChange={(item) => onValueChange(item.value)} 
				defaultValue={selectedValue} 
				placeholder={placeholder} 
				styles={colourStyles}
			/>
		</div>
	)
}

const colourStyles = {
	control: (styles) => ({ ...styles, backgroundColor: 'white', height: 54, borderRadius: 10, fontSize: 14 }),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
	  return {
		...styles,
		backgroundColor: isDisabled
		  ? undefined
		  : isSelected
		  ? '#eee'
		  :  '#fff',
		color: isDisabled
		  ? '#ccc'
		  : 'black',
		cursor: isDisabled ? 'not-allowed' : 'default',
		':active': {
		  ...styles[':active'],
		  backgroundColor: !isDisabled
			? isSelected
			  ? 'red'
			  : 'blue'
			: undefined,
		},
		fontSize: 14
	  };
	}
  };

/*
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const DropDownList = ({options}) => {
  	return (
		<div>
			<Dropdown 
				options={options || []} 
				onChange={() => {}} 
				value={options && options.length > 0 ? options[0] : '-'} 
				placeholder="Select an option" 
				controlClassName='myControlClassName'
				arrowClassName='myArrowClassName'
				menuClassName='myMenuClassName'
			/>
		</div>
   	)
}
*/