import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import VI_CMPY_003Component from '../../components/VI_CMPY/VI_CMPY_003Component';
import style from '../../assets/styles/vi_cmpy';
import {inWorkspace} from '../../actions/behave/ConfigAction'

const mapState = state => ({
  workspace: state.ConfigReducer.toJS().workspace
});

const mapDispatch = dispatch => ({
  inWorkspace: () => dispatch(inWorkspace())
});

const VI_CMPY_003Container = connect(mapState, mapDispatch)(
  withStyles(style, { withTheme: true })(VI_CMPY_003Component)
)

export default VI_CMPY_003Container;