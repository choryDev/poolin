import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import MyTasksComponent from '../../components/VI_CMPY/MyTasksComponent';
import style from '../../assets/styles/vi_cmpy';
import {inWorkspace} from '../../actions/behave/ConfigAction'

const mapState = state => ({
  workspace: state.ConfigReducer.toJS().workspace
});

const mapDispatch = dispatch => ({
  inWorkspace: () => dispatch(inWorkspace())
});

const MyTasks = connect(mapState, mapDispatch)(
  withStyles(style, { withTheme: true })(MyTasksComponent)
)

export default MyTasks;