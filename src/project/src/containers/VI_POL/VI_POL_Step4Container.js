import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import VI_POL_ModalComponent from '../../components/VI_POL/VI_POL_ModalComponent';
import style from '../../assets/styles/vi_pol';

const mapState = state => ({
    workspaceId: state.SessionReducer.toJS().workspaceId
});

const mapDispatch = dispatch => ({
});

const VI_POL_Step4Container = connect(mapState, mapDispatch)(
  withStyles(style, { withTheme: true })(VI_POL_ModalComponent)
)

export default VI_POL_Step4Container;
