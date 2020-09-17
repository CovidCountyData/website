import React from 'react'
import DropdownTreeSelect from 'react-dropdown-tree-select'

// Needed to make the extend React.Component to be able to use the
// should component update method.
// If the component gets re-rendered, the data prop gets reset and
// all selected items are cleared
// React.memo (used for functional components) wasn't working either
class TS extends React.Component {
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <DropdownTreeSelect
                showPartiallySelected={true}
                inlineSearchInput={true}
                keepOpenOnSelect={true}
                texts={{ placeholder: this.props.placeholder }}
                data={this.props.data}
                className="mdl-demo"
                onChange={this.props.onChange} />
        )
    }
}

export default TS