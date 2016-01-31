var MyComponent = React.createClass({displayName: "MyComponent",
    render:function(){
        return(
            React.createElement("h1", null, "I am a Pre compile Web Component calling external")
        );
    }
});

React.render(React.createElement(MyComponent, null),document.getElementById('container'));
