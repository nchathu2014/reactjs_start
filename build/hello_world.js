/**
 * Created by UCHATNU on 1/27/2016.
 */

var HelloWorld=React.createClass({displayName: "HelloWorld",
    render:function(){
        return (
            React.createElement("div", null, 
            React.createElement("h1", null, "Hello World!"), 
        React.createElement("p", null, "I am hello world tag from Reactjs")
        )
        );
    }
});


React.render(React.createElement(HelloWorld, null),document.body);