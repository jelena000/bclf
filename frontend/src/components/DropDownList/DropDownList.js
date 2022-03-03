import React from 'react'
import Select from 'react-select'

const DropDownList = ({ options, selectedValue, onValueChange, placeholder }) => {
	return (
		<div>
			<Select 
				options={options || []} 
				onChange={(item) => onValueChange(item.value)} 
				defaultValue={selectedValue} 
				placeholder={placeholder} 
				styles={customStyles}
			/>
		</div>
	)
}

const customStyles = {
	control: (styles) => ({ ...styles, backgroundColor: '#2e80f10d', height: 53, borderRadius: 10, fontSize: 13 }),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
	  return {
		...styles,
		backgroundColor: 
		   isSelected
		  ? '#2563eb'
		  :  '#fff',
		color: isSelected
		  ? '#eee'
		  : 'black',
		/*cursor: isDisabled ? 'not-allowed' : 'default',
		':active': {
		  ...styles[':active'],
		  backgroundColor: !isDisabled
			? isSelected
			  ? 'red'
			  : 'blue'
			: undefined,
		},*/
		fontSize: 14
	  };
	}
};

export default DropDownList;