/**
 * Created by night on 8/12/2017.
 */
// this file for learning

var image = React.createElement('img', {src: 'https://facebook.github.io/react/img/logo.svg'});
var title = React.createElement('h1', null, 'Hello, React!');
var subtitle = React.createElement('p', null, 'Первый опыт создания контейнера в React');
var container = React.createElement('div', {className: 'container'}, image, title, subtitle);

ReactDOM.render(container, document.getElementById('start'));
