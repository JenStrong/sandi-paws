const pet = ({name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};


const App = () => {
    return React.createElement(
        "div",
        {}, [
        React.createElement("h1", {}, "Sandi Paws Rescue"),
        React.createElement(pet, {name: "Luna", animal: "Dog", breed: "Lab"}),
        React.createElement(pet, {name: "Peper", animal: "Bird", breed: "Parrot"}),
        React.createElement(pet, {name: "Doink", animal: "Cat", breed: "Mixed"})
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root")
);