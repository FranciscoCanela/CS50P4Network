class EditablePost extends React.Component{
    constructor(props) {
        super(props);
        this.textAreaRef = React.createRef();
        this.state = {
            current_time: "",//get_current_time(),
            post_content: ""
        };
    }
    submitPost() {
        
    }
    typed = (event) => {
        this.setState({
            post_content: event.target.value
        });
        this.adjustTextAreaRows();
    };
    adjustTextAreaRows = (reset) => {
        setTimeout(() => {
            if (reset) {
                this.textAreaRef.current.rows = 2;
            }
            else {
                this.textAreaRef.current.rows = get_text_area_height(this.textAreaRef.current)
            }
            }, 20);

    };

    render(){
        const fav_color_style = {backgroundColor: this.props.color};
        return(
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2 post" style={fav_color_style}>
                    <div className="post-content container">
                        <div className="row post-info">
                            <div className="col-6 author">
                                <p><a href={`/view-posts/${this.props.username}/`} style={{color: this.props.color}}>
                                    <strong>{this.props.username}</strong></a> says:</p>

                            </div>
                            <div className="col-6 time">
                                
                            </div>
                        </div>
                        <div className="row post-body">
                            <div className="col-12 post-content-editable">
                                <textarea placeholder="What are you thinking today? Type away!...." style={fav_color_style}
                                          value={this.state.post_content} onChange={this.typed} ref={this.textAreaRef}
                                          onFocus={this.adjustTextAreaRows}>
                                </textarea>
                            </div>
                        </div>
                        <div className="row post-submit">
                            <button type="submit" style={fav_color_style} onClick={this.submitPost.bind(this)}>
                                <span id="submit-button-text" style={{color: this.props.color}}>Post!</span>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        );

    }
}


class App extends React.Component{
    render(){
        const editable_post= <EditablePost color="lightblue" />;
        return(
            <div className="container">
                {editable_post}
            </div>
        )
    }
   
}

ReactDOM.render(<App />,document.querySelector("#app"));