/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function setEnvironment(){
    process.env.URL = process.env.URL;
    
}
export default {
    setEnvironment,
};