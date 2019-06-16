import React from 'react';
import classNames from 'classnames';
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from "@material-ui/core/Button";

import Add from '@material-ui/icons/Add';
import Home from '@material-ui/icons/Home';
import Brightness1 from '@material-ui/icons/Brightness1';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined';
import Notifications from '@material-ui/icons/Notifications';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Modal from '../../containers/VI_POL/PopProjectDetail'
import { ToolBarAvatar, Typography, Atag } from '../unit/index'
import color from '../../assets/styles/material/com/color'
import CircularProgress from "@material-ui/core/CircularProgress";

const state = {
  modal: false,
}

class LeftComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state=state;
    this.handleModal = this.handleModal.bind(this);

  }

  handleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if(this.props.open !== nextProps.workspace && !nextProps.workspace){
      this.props.close();
    }
  }

  render() {
    const { classes, theme, handleOpen, workspace } = this.props;

    const MenuArr =  [
         {
              name: 'Home' ,
              Icon:<Home className={classes.menuIcon}/>,
              url: '/overview'
          },
          {
              name: 'Calender' ,
              Icon:<CheckCircleOutlined className={classes.menuIcon}/>,
              url: '/calendar'
          },
          {
              name: 'My Tasks' ,
              Icon:<CheckCircleOutlined className={classes.menuIcon}/>,
              url: '/my-tasks'
          },
          {
              name: 'Inbox' ,
              Icon:<Notifications className={classes.menuIcon}/>,
              url: '/inbox'
          },
          {
              name: 'Reports' ,
              Icon:<Notifications className={classes.menuIcon}/>,
              url: '/reports'
          },
    ];

    const MenuList__Component = (arr) =>
      <List className={classes.ListWrap}>
        {arr.map((r, index) => (
          <Atag
            onClick={()=>this.props.changeHeaderTitle(r.name)}
            key={index}
            href={`/${this.props.workspaceId}${r.url}`}>
              <ListItem 
                className={classNames(
                this.props.open ? classes.toolbarItemOP : null)}
                button >
                  <ListItemIcon
                      className={this.props.open ? classes.iconOpen : classes.iconClose }>
                      {r.Icon}
                  </ListItemIcon>
                  <Typography
                      variant={'caption'}
                      fontWeight={2}
                      color={this.props.open ? '#fff' : color.gray.default}>
                      {r.name}
                  </Typography>
              </ListItem>
          </Atag >
        ))}
    </List>;

    const projectListComponent = () =>
      <List className={classes.ListWrap}>
        {this.props.projectList.map((r, index) => (
          <ListItem 
            className={classNames(
              classes.toolbarItem,
              classes.ProjectItem)}
            button key={index}>
            <div style={{display: 'flex'}}>
              <Brightness1
                style={{color: this.props.open ? 
                  r.num === 0 ? color.gray.offGray : '#6AD790'
                  : color.gray.offGray}}
               className={classes.BrightBtn}>
              </Brightness1>
                <Typography
                  fontWeight={2}>
                  {r.project_name}
                </Typography>
              </div>
              <MoreHoriz
                style={{color: this.props.open ? 
                                r.num === 0 ? color.gray.offGray : '#6AD790'
                                : color.gray.offGray,
                        marginRight: '3px'}}>
              </MoreHoriz>
          </ListItem>
        ))}
    </List>;

    const MENU = () =>
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: this.props.open,
          [classes.drawerClose]: !this.props.open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: this.props.open,
            [classes.drawerClose]: !this.props.open,
            [classes.toolbarWrap]:true
          }),
        }}
        open={this.props.open}>
        <div>
        <div className={classes.toolbar}>
          <div style={{display: 'flex'}}>
            <ToolBarAvatar style={{marginLeft: '2px'}} >
              <Typography fontWeight={3} color={'#fff'}>
                P
              </Typography>
            </ToolBarAvatar>
            <Typography
              variant={'h6'}
              style={{marginLeft: '16px'}} fontWeight={3} color={'#fff'}>
              Pssss
            </Typography>
          </div>
          <IconButton 
            className={classNames(classes.iconBtn,
            this.props.open ? classes.toolbarItemOP : null)} onClick={handleOpen}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider style={{backgroundColor: color.gray.hoverGray}}/>
          {MenuList__Component(MenuArr)}
        <Divider style={{backgroundColor: color.gray.hoverGray}}/>
          <div style={{minHeight:'42px'}} className={classes.toolbar}>
              <Typography
               fontWeight={2} 
               color={ this.props.open ? '#fff' : color.gray.offGray }>
                Project
              </Typography>
            <IconButton 
              onClick={()=>this.handleModal()}
              className={classNames(classes.iconBtn,
              this.props.open ? classes.toolbarItemOP : null)}>
               <Add />
            </IconButton>
          </div>
            {this.props.loading_project_list ?
                <CircularProgress variant="determinate" />
                : projectListComponent()
            }
          </div>
          <div className={classes.bottomWrap}>
            <Typography
              variant={'h4'}
              fontWeight={3} 
              style={{alignItems: 'center'}}
              color={ this.props.open ? '#fff' : color.gray.offGray }>
              INPOOL
            </Typography>
            <Button
              variant="outlined"
              className={classNames(classes.invtBtn,
              this.props.open ? classes.toolbarItemOP : classes.iconClose)}>
              Invite to Inpool
            </Button>
          </div>
          <Modal
            open = {this.state.modal}
            projectId={'p000000000014'}
            handleModal={this.handleModal}/>
      </Drawer>;
    return (
      <div>
        {workspace ? <MENU /> : undefined}
      </div>
    )
  }
}
export default LeftComponent;
