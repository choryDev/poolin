import React from 'react';

import "./autocomplete.scss";

class Autocomplete extends React.Component {
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

  // handleautocomplete(name,value) { 받는 함수 입니다.
  //   this.setState({
  //     [name]: value,
  //   });
  // }
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
    const {
      className,
      // color,
      // children,
      //보여질 배열과 바뀔 변수와 변수 명입니다
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
    const filter_list =array.filter(m => m[`${keywordView}`].toLowerCase().includes(this.state.inputValue.toLowerCase()));
    return (
      <div className={`autoComplete ${!className ? 'defaultAutoComplete' : className}`}  {...other} style={style} >
        <input
          ref={this.textView}
          className={`viewValue ${!fullWidth ? '' : 'fullWidth'}`}
          onClick={() => this.handleShowOpen()}
          value={this.state.view}
          readOnly
          placeholder={placeholder}/>
        <i className="fas fa-caret-down"/>
        <div style={showSwitch} className='show-span'>
          <div className={`inputarea `} >
            <input
              ref={this.textInput}
              autoComplete="off"
              value={this.state.inputValue} name={"inputValue"}
              onChange={this.handleChange} 
              onKeyPress={event =>
                {if(event.key === 'Enter' && filter_list.length==1){
                  this.handleView(filter_list[0][`${keywordView}`]);
                  this.props.handleautocomplete(valueName,filter_list[0][`${keywordValue}`]);
                  this.handleShowOpen();
              }}}
            />
          </div>
          <div className='scrollbeauti'>
            <div className={`itemList`}>
              {filter_list.sort().map(((r, i) => (
               <div
                key={i}
                className={`item`}
                onClick={() => {
                    this.handleView(r[keywordView]);
                    this.props.handleautocomplete(valueName,r[`${keywordValue}`]);
                    this.handleShowOpen()}}>
                {r[keywordView]}
               </div>
            )))}
          </div>
          </div>
        </div>
        <div style={showSwitch} className='my-autoComplete-bg' onClick={()=>this.handleShowOpen()}></div>
      </div>
    );
  }
};

export default Autocomplete;