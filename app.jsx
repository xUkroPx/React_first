/**
 * Created by night on 8/12/2017.
 */
function FirstComponent(){
    return (<div className="container">
    <h1>Hello, JSX!</h1>
</div>);
}

ReactDOM.render(<FirstComponent/>, document.getElementById('start'));