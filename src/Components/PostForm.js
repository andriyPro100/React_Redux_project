import React from "react"
import {connect} from "react-redux";
import {createPost} from "../redux/actions";

class PostForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    changeInputHandler = event => {
        // event.persist()
        this.setState(prev =>({...prev, ...{
            [event.target.name]: event.target.value
            }}))
    }

    submitHandler = event => {
        event.preventDefault()

        if (!this.state.title.trim()) {
            return
        }
        const newPost = { title: this.state.title, id: Date.now().toString()}
        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           value={this.state.title}
                           name="title"
                           onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success m-2" type="submit">Создать</button>
            </form>
        )
    }
}
const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm)
