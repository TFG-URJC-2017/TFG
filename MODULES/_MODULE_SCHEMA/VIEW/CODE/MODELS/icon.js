//TODO  change _NAME_ for the module name
////var name must begin with a capital letter


/*jshint ignore:start */


var _NAME_Icon = React.createClass({
    render: function() {
        return ( < div className = "icon-_NAME_" >
            < /div>
        );
    }
});

onChange() {
    this.setState({
        isChecked: !this.state.isChecked
    });
}

ReactDOM.render(< _NAME_Icon / > ,
    document.getElementById('_NAME_Icon')
);
/*jshint ignore:end */
