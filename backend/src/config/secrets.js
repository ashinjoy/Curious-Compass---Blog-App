import { configDotenv } from "dotenv";
configDotenv()

const {
    PORT,
    mongoConnect
} = process.env

console.log(PORT);


export const secrets = {
    PORT : PORT || 3000 ,
    mongoConnect : mongoConnect

}