import React from 'react'

export default class CommentItemComponent extends React.Component{

  render () {
        return(
           <li className="list-group-item">
              <div>
                  {this.props.comment.content}
              </div>
              <div className="commentAuthor">
                  评论人: {this.props.comment.author}
              </div>
          </li>
        )
    }

}