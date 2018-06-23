import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { load as loadItems } from '../actions/realty'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import RealtyItem from './RealtyItem.jsx'

class Home extends Component {
  componentWillMount() {
    const { loadingItems, lastLoaded, loadItems } = this.props
    if ( !loadingItems && !lastLoaded ) loadItems()
  }

  render() {
    const { items, loadingItems } = this.props
    return (
      <Grid>
        { loadingItems && <LinearProgress /> }
        {items.map(item => <RealtyItem item={item} />)}
      </Grid>
    )
  }
}

export default connect(
  (store) => store.realty,
  (dispatch) => bindActionCreators({ loadItems }, dispatch)
)(Home)
