class HelloMessage extends  React.Component {
    render() {
        return <div>Hello {this.props.name}</div>
    }
}

ReactDOM.render(<HelloMessage name="React" />, document.getElementById('content'));