import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import styleI from "./autocompleteCSS";

const css = styleI(195);

class AutoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      inputValue: "",
      view: ''
    }
    this.handleShowOpen = this.handleShowOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleView = this.handleView.bind(this);
    this.textInput = React.createRef();
    this.textView = React.createRef();
  }

  componentDidUpdate() {
    this.textInput.current.focus();
  }
  handleShowOpen() {
    this.setState({
      show: !this.state.show
    })
    this.textView.current.focus();
  }
  handleShowClose() {
    this.setState({
      show: false
    })
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleView(view){
    this.setState({
      view: view
    })
  }

  render() {
    const { classes } = this.props;

    const {
      className,
      array,
      viewValueName,
      placeholder,
      fullWidth,
      style,
      valueName,
      keywordValue,
      keywordView,
      handleautocomplete,
      ...other
    } = this.props;
    const showSwitch = {
      display: this.state.show ? 'block' : 'none',
    }
    const filter_list = array !== undefined ? array.filter(m => m[`${keywordView}`].toLowerCase().includes(this.state.inputValue.toLowerCase())) : array;
    return (
      <div className={classNames(classes.autoComplete,className ? className : classes.defaultAutoComplete)}  {...other} style={style} >
        <input
          ref={this.textView}
          className={classNames(classes.viewValue, fullWidth ? classes.fullWidth : null)}
          onClick={() => this.handleShowOpen()}
          value={this.state.view}
          readOnly
          placeholder={placeholder}/>
        <i className={classNames(classes.caretDown,"fas fa-caret-down")}/>
        <div style={showSwitch} className={classes.showSpan}>
          <div
            className={classes.inputarea}>
            <input
              ref={this.textInput}
              autoComplete="off"
              value={this.state.inputValue} name={"inputValue"}
              onChange={this.handleChange} 
              onKeyPress={event =>
                {if(event.key === 'Enter' && filter_list.length === 1){
                  this.handleView(filter_list[0][`${keywordView}`]);
                  this.props.handleautocomplete(valueName,filter_list[0][`${keywordValue}`]);
                  this.handleShowOpen();
              }}}
            />
          </div>
          <div className={classes.scrollbeauti}>
            <div className={classes.itemList}>
              {filter_list !== undefined ? filter_list.sort().map(((r, i) => (
               <div
                key={i}
                className={classes.item}
                onClick={() => {
                    this.handleView(r[keywordView]);
                    this.props.handleautocomplete(valueName,r[`${keywordValue}`]);
                    this.handleShowOpen()}}>
                {r[keywordView]}
               </div>
            ))) : []}
          </div>
          </div>
        </div>
        <div style={showSwitch} className={classes.bg} onClick={()=>this.handleShowOpen()}></div>
      </div>
    );
  }
};

const Autocomplete = withStyles(css, { withTheme: true })(AutoComponent)

export default Autocomplete;