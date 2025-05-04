const greeting = function(name) {
    return `Hello ${name}`;
}

const newGreetng = (name) => {
    return `Hello ${name}`;
}

// Arrow function with implicit return
const newGreetng2 = (name) => `Hello ${name}`;

// Lexical Binding
const functionalCharacter = {
    name: 'Gandalf',
    messageWithTraditionalFunction: function(message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}

functionalCharacter.messageWithTraditionalFunction('You shall not pass!');
functionalCharacter.messageWithArrowFunction('You shall not pass!');
