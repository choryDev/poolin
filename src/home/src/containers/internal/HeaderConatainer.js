import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import HeaderComponent from '../../components/internal/HeaderComponent';
import header from '../../assets/styles/material/header';
import {fetchListProject} from "../../../../project/src/actions/behave/SessionAction";

const mapState = state => ({

});

const mapDispatch = dispatch => ({
    fetchListProject: projectId => dispatch(fetchListProject(projectId))
});

const HeaderContainer = connect(mapState, mapDispatch)(
    withStyles(header, { withTheme: true })(HeaderComponent)
);

export default HeaderContainer;