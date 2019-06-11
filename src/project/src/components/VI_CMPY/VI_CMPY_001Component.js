import React from 'react'
import Workspace from '../internal/Workspace';
import classNames from 'classnames';
import color from '../../assets/styles/material/com/color'

import { PositionCard, Typography, TaskCard, CandidateCard, HistoryCard } from '../unit/index'

class VI_CMPY_001Component extends Workspace {
  constructor(props){
    super(props)
    this.state={
      MyPosiArr:[
        {
          num: '1',
          pro: [
            {name:'IC',color: 'red'},
            {name:'IC',color: 'green'},
            {name:'IC',color: 'blue'},],
          date: '2019-03-01'
        },
        {
          num: '2',
          pro: [
            {name:'jj',color: 'yellow'},
            {name:'IC',color: 'blue'},],
          date: '2019-01-01'
        },
        {
          num: '4',
          pro: [
            {name:'IC',color: 'blue'},
            {name:'IC',color: 'red'},
            {name:'kk',color: 'green'},],
          date: '2019-08-01'
        },
        {
          num: '1',
          pro: [
            {name:'IC',color: 'red'},
            {name:'IC',color: 'green'},
            {name:'IC',color: 'blue'},],
          date: '2019-03-01'
        },
        {
          num: '2',
          pro: [
            {name:'jj',color: 'yellow'},
            {name:'IC',color: 'blue'},],
          date: '2019-01-01'
        },
        {
          num: '4',
          pro: [
            {name:'IC',color: 'blue'},
            {name:'IC',color: 'red'},
            {name:'kk',color: 'green'},],
          date: '2019-08-01'
        },
        {
          num: '1',
          pro: [
            {name:'IC',color: 'red'},
            {name:'IC',color: 'green'},
            {name:'IC',color: 'blue'},],
          date: '2019-03-01'
        },
        {
          num: '2',
          pro: [
            {name:'jj',color: 'yellow'},
            {name:'IC',color: 'blue'},],
          date: '2019-01-01'
        },
        {
          num: '4',
          pro: [
            {name:'IC',color: 'blue'},
            {name:'IC',color: 'red'},
            {name:'kk',color: 'green'},],
          date: '2019-08-01'
        },
      ],
      Task:[
        {
          task: 'haaha',
          who: 'choi',
          num: 1,
          color: 'yellow',
          date: '2019-08-01'
        },
        {
          task: '지원자 인터뷰',
          who: '철수',
          num: 1,
          color: 'blue',
          date: '2019-08-01'
        },
        {
          task: '밥먹기',
          who: '짱구',
          num: 1,
          color: 'green',
          date: '2019-08-01'
        },
        {
          task: '지원자 인터뷰',
          who: '최인준',
          num: 1,
          color: 'cyan',
          date: '2019-08-01'
        },
        {
          task: '지원자 인터뷰',
          who: '최인준',
          num: 1,
          color: 'gray',
          date: '2019-08-01'
        },
      ]
    }
  }

  render() {
        const { classes } = this.props;

        const HeaderTitel=(weight,va,color,content,mr,mb) =>
         <Typography
          style={{
            marginRight: `${mr}px`,
            marginBottom : `${mb}px`}}
          fontWeight={weight}
          variant={va}
          color={color}>
          {content}
        </Typography>
    return (

        <div className={classNames(classes.root)}>
          <div className={classes.header}>
              {HeaderTitel(2,'h5',color.gray.default,'Recent Status',48,0)}
              {HeaderTitel(2,'h5',color.gray.default,'5',8,0)}
            <div>
              {HeaderTitel(1,'caption',color.gray.weakGray,'New',0,0)}
              {HeaderTitel(1,'caption',color.gray.weakGray,'Candidates',16,0)}
            </div>
            {HeaderTitel(2,'h5',color.gray.default,'5',8)}
            <div>
              {HeaderTitel(1,'caption',color.gray.weakGray,'Candidates',0,0)}
              {HeaderTitel(1,'caption',color.gray.weakGray,'Moved Forward',16,0)}
            </div>
            {HeaderTitel(2,'h5',color.gray.default,'5',8,0)}
            <div>
              {HeaderTitel(1,'caption',color.gray.weakGray,'Candidates',0,0)}
              {HeaderTitel(1,'caption',color.gray.weakGray,'Hired',16,0)}
            </div>
          </div>
          <div className={classes.wrap}>
            <div className={classNames(classes.contantWrap,classes.widthWrap)}>
              <div className={classNames(classes.contant,classes.full)}>
                {HeaderTitel(3,'h6',color.gray.cardGray,'My Position / Pool',16,8)}
                <div className={classes.itemW}>
                  {this.state.MyPosiArr.map((r,k)=>
                      <PositionCard key={k} data={r}/>
                  )}
                </div>
              </div>
            </div>
            <div className={classNames(classes.contantWrap,classes.widthWrap)}>
              <div className={classNames(classes.contant,classes.full, classes.midcontant)}>
                {HeaderTitel(3,'h6',color.gray.cardGray,'New Candidates',16,8)}
                <div className={classes.itemW}>
                  {this.state.Task.map((r,k)=>
                      <CandidateCard key={k} data={r}/>
                  )}
                </div>
              </div>
              <div className={classNames(classes.contant,classes.full, classes.midcontant)}>
                {HeaderTitel(3,'h6',color.gray.cardGray,'History',16,8)}
                <div className={classes.itemW}>
                  {this.state.Task.map((r,k)=>
                      <HistoryCard key={k} data={r}/>
                  )}
                </div>
              </div>
            </div>
            <div className={classNames(classes.contantWrap,classes.widthWrap)}>
              <div className={classNames(classes.contant,classes.full)}>
               {HeaderTitel(3,'h6',color.gray.cardGray,'My Tasks / Pool',16,8)}
               <div className={classes.itemW}>
                  {this.state.Task.map((r,k)=>
                      <TaskCard key={k} data={r}/>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default VI_CMPY_001Component