import readlineSync from 'readline-sync';

function getRandomInt(min, max) {  
    min = Math.ceil(min);  
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

const Question = (answer) => {
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) == answer) {
        console.log(`Correct!`);

        return true;
    }
    else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);

        return false;
    }
}

const Add = (num1, num2) => {
    console.log(`Question: ${num1} + ${num2}`);

    return Question(num1 + num2);
}

const Sub = (num1, num2) => {
    console.log(`Question: ${num1} - ${num2}`);
    return Question(num1 - num2);
}

const Mult = (num1, num2) => {
    console.log(`Question: ${num1} * ${num2}`);

    return Question(num1 * num2);
}

const RandomizeQuestion = (Question) => {
    let randomizer = getRandomInt(1, 3);

    if (randomizer == 1) {
        return Question = Add(getRandomInt(1, 99), getRandomInt(1, 99));
    }
    else if (randomizer == 2) {
        return Question = Sub(getRandomInt(1, 99), getRandomInt(1, 99));
    }
    else if (randomizer == 3) {
        return Question = Mult(getRandomInt(1, 99), getRandomInt(1, 99));
    }
}

export default (name) => {
    console.log(`What is the result of the expression?`);
    
    let Question1;
    let Question2;
    let Question3;

    Question1 = RandomizeQuestion(Question1);

    if (Question1 == true) {
        Question2 = RandomizeQuestion(Question2);

        if (Question2 == true) {
            Question3 = RandomizeQuestion(Question3);

            if (Question3 == true) {
                console.log(`Congratulations, ${name}!`);
            }
        }
    }
    else {
        console.log(`Let's try again, ${name}!`);
    }
}