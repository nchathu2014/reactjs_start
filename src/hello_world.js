/**
 * Created by UCHATNU on 1/27/2016.
 */

var HelloWorld=React.createClass({
    render:function(){
        return (
            <div>
            <h1>Hello World!</h1>
        <p>I am hello world tag from Reactjs</p>
        </div>
        );
    }
});


React.render(<HelloWorld/>,document.body);