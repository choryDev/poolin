import React from 'react';
import classNames from 'classnames';
import blue from '@material-ui/core/colors/blue';
import { Input, Typography, Autocomplete } from '../unit/index'
import { countries } from './dump'

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
          className={classNames(classes.titleText,classes.marginBtm30)}>
          Position Details
        </Typography>
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
        <div>
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
        <Autocomplete
          placeholder='Country *'
          keywordValue='value'
          keywordView='name'
          array={countries}
          valueName='country'
          disabled={this.props.newable}
          readOnly={this.props.newable}
          view={this.props.location}
          handleautocomplete={(name, value) => this.props.handleautocomplete('location', value)}
          style={{marginBottom: '10px'}}/>
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
        <div style={{display: 'flex',marginBottom: '10px'}}>
          <Autocomplete
            placeholder='Type Of Position'
            keywordValue='code_value'
            keywordView='code_name'
            disabled={this.props.newable}
            readOnly={this.props.newable}
            array={this.props.typePosition}
            valueName='typePosition'
            handleautocomplete={(name, value) => this.props.handleautocomplete('position_type', value)}
            style={{marginRight: '10px'}}/>
          <Autocomplete
            placeholder='Category'
            keywordValue='code_value'
            keywordView='code_name'
            array={this.props.typeCategory}
            valueName='typeCategory'
            disabled={this.props.newable}
            readOnly={this.props.newable}
            handleautocomplete={(name, value) => this.props.handleautocomplete('category', value)}/>
        </div>
        <div style={{display: 'flex',marginBottom: '10px'}}>
          <Autocomplete
            placeholder='Education'
            keywordValue='code_value'
            keywordView='code_name'
            disabled={this.props.newable}
            readOnly={this.props.newable}
            array={this.props.typeEdu}
            valueName='typeEdu'
            handleautocomplete={(name, value) => this.props.handleautocomplete('education', value)}
            style={{marginRight: '10px'}} />
          <Autocomplete
              placeholder='Experience'
              keywordValue='code_value'
              keywordView='code_name'
              disabled={this.props.newable}
              readOnly={this.props.newable}
              array={this.props.typeExp}
              valueName='typeExp'
              handleautocomplete={(name, value) => this.props.handleautocomplete('experience', value)}/>
        </div>
      </div>
    )
  }
}

export default VI_POL_101Component