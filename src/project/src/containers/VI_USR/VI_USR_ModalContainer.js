import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import VI_USR_ModalComponent from '../../components/VI_USR/VI_USR_ModalComponent';
import style from '../../assets/styles/vi_usr';
import {inWorkspace} from '../../actions/behave/ConfigAction'

const mapState = state => ({
});

const mapDispatch = dispatch => ({
});

const VI_POL_ModalContainer = connect(mapState, mapDispatch)(
  withStyles(style, { withTheme: true })(VI_USR_ModalComponent)
)

export default VI_POL_ModalContainer;
