import cli from "../src/cli.js";
import brainEven from "./brain-even.js";
import brainCalc from "./brain-calc.js";

console.log("Welcome to the Brain Games!");

brainCalc(cli());
brainEven(cli());
