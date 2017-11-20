import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


//express server setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`express is running on port ${port}`);
});