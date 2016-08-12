
import React from 'react'
import CommentListComponent from './CommentListComponent'
import FormBoxComponent from './FormBoxComponent'
import _ from 'lodash'

export default class CommentBoxComponent extends React.Component{

  //初始化state
  // getInitialState(){
  //   return {
  //     commentDataList:[]
  //   }
  // }

  //eas6的写法
  constructor(){
    super();
    this.state = {
      commentDataList:[]
    }
  }

   //组件挂载后执行，在这里一般是获取数据，如发ajax请求
  componentDidMount(){
    let defaultComment = [{
      author:"junbang",
      content:"沙发！！！"
    }];

    this.setState({
      commentDataList:defaultComment
    })
  }

  callBackPostComment(comment){
    let newCommentList = _.extend(this.state.commentDataList,[]);
    newCommentList.push(comment);
    this.setState({
      commentDataList:newCommentList
    })
  }

  render () {
      let style = {
        fontSize:25,
        textAlign:"center"
      }
        return(
          <div className="page-header">
            <div style={style}>CommentBoxDemo</div>
             <CommentListComponent commentDataList={this.state.commentDataList}/>
           {/*
              方法需要bind(this)，不然方法内部的this指向会不正确
           */}
             <FormBoxComponent postComment={this.callBackPostComment.bind(this)}/>
          </div>
          )
    }

}