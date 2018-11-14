import React, { Component } from 'react'
import { connect } from 'react-redux'

import TableItem from './TableItem'

class Tables extends Component {
    render() {
        return (
            <>
                { 
                    this.props.table.map( (i, id) => 
                        <TableItem 
                            key={id} 
                            ind={i.id}
                            name={i.tableName} 
                            tasks={i.tasks} />
                )}
            </>
        )
    }
}

const mapStateToProps = ({ table }) => {
      return { table }
}

export default connect( mapStateToProps )(Tables)