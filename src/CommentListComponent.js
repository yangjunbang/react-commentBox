import React from 'react'
import CommentItemComponent from './CommentItemComponent'
import _ from 'lodash'
export default class CommentListComponent extends React.Component{

  render () {
        return (
            <ul className="list-group" style={{maxHeight:500,overflowY:"auto"}}>
            {
              _.map(this.props.commentDataList,(item,index)=>{
                  return <CommentItemComponent key={index} comment={item}/>
              })
            }
            </ul>
          )
    }

}