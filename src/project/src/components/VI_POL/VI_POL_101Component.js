import React from 'react';
import classNames from 'classnames';
import blue from '@material-ui/core/colors/blue';
import { Input, Typography, Autocomplete } from '../unit/index'
import { countries } from './dump'
import TextField from "@material-ui/core/es/TextField";
import MenuItem from "@material-ui/core/MenuItem";

class VI_POL_101Component extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.VI_POL_101}>
        <Typography
          variant={'h5'}
          fontWeight={2}
          className={classNames(classes.titleText,classes.marginBtm20)}>
          Position Details
        </Typography>
        <div style={{
            display: 'flex'
        }}>
            <Input
              autoComplete={'off'}
              placeholder='Position Title *'
              value={this.props.project_name}
              onChange={e => {
                  this.props.handleChangedStep1(e);
                  this.props.handleHeaderChanged(e)
              }}
              onBlur={() => {
                  if(this.props.newable) {
                      this.props.addNewOne();
                  }
              }}
              name={'project_name'}
              className={classNames(classes.marginBtm10, classes.titleInput)}
              shape={'sm'}
              color={blue}
            />
        </div>
        <div style={{
            display: 'flex',
        }}>
          <Input 
            placeholder='Department'
            value={this.props.department}
            onChange={e=>this.props.handleChangedStep1(e)}
            name={'project_department'}
            className={classes.subInput}
            disabled={this.props.newable}
            readOnly={this.props.newable}
            shape={'sm'} 
            color={blue}/>
          <Input 
            placeholder='Internal ID'
            value={this.props.project_internal_id}
            onChange={e=>this.props.handleChangedStep1(e)}
            name={'project_internal_id'}
            disabled={this.props.newable}
            readOnly={this.props.newable}
            className={classes.subInput}
            shape={'sm'}
            color={blue}/>
        </div>
        <Typography
          variant={'subtitle1'}
          fontWeight={3}
          className={classes.subTitle}>
          Location
        </Typography>
          <TextField
              select
              label="Select"
              value={this.props.location}
              onChange={e => this.props.handleChangedStep1(e)}
              name={"location"}
              margin="dense"
              disabled={this.props.newable}
              readOnly={this.props.newable}
              shape={'sm'}
              style={{
                  marginTop: 18,
                  width: 250
              }}
              variant="outlined"
          >
              {countries.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                      {option.name}
                  </MenuItem>
              ))}
          </TextField>
        <div style={{display: 'flex'}}>
            <input
              type='checkbox'
              name='remote'
              disabled={this.props.newable}
              readOnly={this.props.newable}
              checked={this.props.remote}
              className={classes.checkBox}
              onChange={e=>this.props.handleChangedStep1(e,'checkbox')}/>
            <Typography
              style={{marginTop: 'auto'}}
              variant={'caption'}
              fontWeight={1}>
              Remote / Telecommute
            </Typography>
          </div>
        <Typography
          variant={'subtitle1'}
          fontWeight={3}
          className={classes.subTitle}>
          Details
        </Typography>
        <div style={{display: 'flex',marginBottom: 5}}>
            <TextField
                select
                label="Select"
                style={{
                    marginRight: '10px',
                    flex: 1
                }}
                value={this.props.position_type}
                onChange={e => this.props.handleChangedStep1(e)}
                name={"position_type"}
                disabled={this.props.newable}
                readOnly={this.props.newable}
                margin="dense"
                shape={'sm'}
                variant="outlined"
            >
                {this.props.typePosition.map(option => (
                    <MenuItem key={option.code_value} value={option.code_value}>
                        {option.code_name}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Select"
                style={{
                    marginLeft: '10px',
                    flex: 1
                }}
                value={this.props.category}
                onChange={e => this.props.handleChangedStep1(e)}
                name={"category"}
                disabled={this.props.newable}
                readOnly={this.props.newable}
                margin="dense"
                shape={'sm'}
                variant="outlined"
            >
                {this.props.typeCategory.map(option => (
                    <MenuItem key={option.code_value} value={option.code_value}>
                        {option.code_name}
                    </MenuItem>
                ))}
            </TextField>
        </div>
        <div style={{display: 'flex',marginBottom: 5}}>
            <TextField
                select
                label="Select"
                style={{
                    marginRight: '10px',
                    flex: 1
                }}
                value={this.props.education}
                onChange={e => this.props.handleChangedStep1(e)}
                name={"education"}
                disabled={this.props.newable}
                readOnly={this.props.newable}
                margin="dense"
                shape={'sm'}
                variant="outlined"
            >
                {this.props.typeEdu.map(option => (
                    <MenuItem key={option.code_value} value={option.code_value}>
                        {option.code_name}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Select"
                style={{
                    marginLeft: '10px',
                    flex: 1
                }}
                value={this.props.experience}
                onChange={e => this.props.handleChangedStep1(e)}
                name={"experience"}
                disabled={this.props.newable}
                readOnly={this.props.newable}
                margin="dense"
                shape={'sm'}
                variant="outlined"
            >
                {this.props.typeExp.map(option => (
                    <MenuItem key={option.code_value} value={option.code_value}>
                        {option.code_name}
                    </MenuItem>
                ))}
            </TextField>
        </div>
      </div>
    )
  }
}

export default VI_POL_101Component