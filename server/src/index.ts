import { config } from 'dotenv';
import { LearnToCode } from './server/learn-to-code';

config();

const Learn2Code = new LearnToCode();

Learn2Code
    .configure()
    .start()
    .then(console.log)
    .catch(console.error);
