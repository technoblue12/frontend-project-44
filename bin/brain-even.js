import readlineSync from 'readline-sync';

const Question = (num, name) => {
    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    if (num%2 == 0 & answer == "yes") {
        console.log(`Correct!`);

        return true;
    }
    else if (num%2 != 0 & answer == "no") {
        console.log(`Correct!`);

        return true;
    }
    else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);

        return false;
    }
}

export default (name) => {
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

    const Question1 = Question(15, name);
    if (Question1 == true) {
        const Question2 = Question(6, name);
        
        if (Question2 == true) {
            const Question3 = Question(7, name);

            if (Question3 == true) {
                console.log(`Congratulations, ${name}!`);
            }
        }
    }
}