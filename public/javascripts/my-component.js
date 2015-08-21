var MyButton = React.createClass({
        propTypes: {
            clickHandler: React.PropTypes.func.isRequired
        },

        render: function() {
            return (
                <div className="myButton">
                <button onClick={this.handleClick}>Toggle Text</button>
    </div>
);
},

handleClick: function() {
    this.props.clickHandler();
}
});

var MyComponent  = React.createClass({
        propTypes: {
            text: React.PropTypes.string.isRequired
        },

        getInitialState: function () {
            return {
                showText: true
            };
        },

        render: function() {
            return(
                <div className="myComponent">
            <p>{
                this.state.showText ?
            <span style={{color: 'red'}}>
        {this.props.text}
    </span>
: null
}</p>
<MyButton
clickHandler={this.handleButtonClick}
buttonText={this.props.text}
/>
</div>
);
},

handleButtonClick: function() {
    this.setState({ showText: !this.state.showText });
    renderView();
}
});

var renderView = function() {
    React.render(<MyComponent text={"My Text"} />,
        document.getElementById('container'));
};

renderView();

