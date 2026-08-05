const parent = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},React.createElement('h1',{},'Hii nested elements using react here guys!')));

const x = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{},'Hii nested elements using react here guys!'),React.createElement('h2',{},'Hii Sibling elements using react here guys!')]));


const y = React.createElement('div',{id:"parent"},[React.createElement('div',{id:"child1"},[React.createElement('h1',{},'Hii nested elements using react here guys of parent child1!'),React.createElement('h2',{},'Hii Sibling elements using react here guys of parent child1!')])],[React.createElement('div',{id:"child2"},[React.createElement('h1',{},'Hii nested elements using react here guys of parent child2!'),React.createElement('h2',{},'Hii Sibling elements using react here guys! of parent child2')])]);

// const z = React.createElement('h1', {className:'anything'}, 'SHubham Buudy from react');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(y);

console.log(y);
