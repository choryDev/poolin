import React from 'react'

export default class Workspace extends React.Component{
  constructor(props) {
    super(props);
    this.props.inWorkspace();
  }
}