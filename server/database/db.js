import mongoose from "mongoose";


const dbConnection = async() => {

    const DB_URI = "mongodb+srv://anjali14ldh:7byDC0EhjWtUftdy@job-portal.tsf919k.mongodb.net/";
//did correction: added job-portal to the url at end.
    try{
        await mongoose.connect(DB_URI);
        console.log('Database connected successfully.');
    }
    catch(error){
        console.log('Error while connecting with the database.', error.message);
    }

}

export default dbConnection;