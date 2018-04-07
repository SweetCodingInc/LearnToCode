import { LearnToCode } from './server/learn-to-code';

const Learn2Code = new LearnToCode();

Learn2Code
    .configure()
    .start()
    .then(console.log)
    .catch(console.error);
