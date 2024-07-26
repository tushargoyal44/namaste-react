const heading = React.createElement("div", {className : 'container'},
            React.createElement('h1', null, 'Hello World!'),
            React.createElement('p', null, "Today i'm doing a quick start on react. Hope i'll complete my task") 
    );


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);