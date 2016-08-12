import React from 'react'
export default class FormBoxComponent extends React.Component{

   constructor(){
    super();
    this.state = {
      content:""
    }
  }

  postComment(){
    let comment = {
      author:"junbang",
      content:this.state.content
    }
    this.props.postComment(comment);
  }

  inputConten(e){
    this.setState({
      content:e.target.value
    })
  }

  render () {
        return (
           <div className="commentForm">
              <form>
                <div className="form-group">
                  <textarea name="content" className="form-control" rows="3" placeholder="输入评论" onChange={this.inputConten.bind(this)} value={this.state.content}></textarea>
                  <button className="btn btn-default" type="button" onClick={this.postComment.bind(this)}>提交</button>
                </div>
              </form>
            </div> 
          )
    }

}