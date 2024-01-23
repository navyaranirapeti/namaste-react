const heading = React.createElement('h1', {
    id: "heading", xyz: "abc"
}, "Hello World from React!");


const nestedEle = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child1' },
        [React.createElement('h1', null, 'This is 1 H1'), React.createElement('h2', null, 'This is 1 H2')]),
        React.createElement('div', { id: 'child2' },
        [React.createElement('h1', null, 'This is 2 H1'), React.createElement('h2', null, 'This is 2 H2')])])

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(nestedEle);