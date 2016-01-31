var MyComponent = React.createClass({
    render:function(){
        return(
            <h1>I am a Pre compile Web Component calling external</h1>
        );
    }
});

React.render(<MyComponent/>,document.getElementById('container'));
