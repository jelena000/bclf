const express = require('express');
const router = express.Router();
const multer = require('multer');
const moment = require('moment');
const awsConfig = require('../config/aws-config');
const AWS = require("aws-sdk");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

//CONNECT ON AWS
AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();

/*
const fetchOneByKey = () => {
    let params = {
        TableName: "Users",
        Key: {
            "userid": "id1",
            "creationdate": "11/02/2021",
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}
*/


router.route('/register').post(async function (req, res) {
	let retVal = { success : false, msg : ''};
	try
	{
		if (!req.body) 
            {res.status(200).json(retVal);  return;}
        
        const { name, surname, email } = req.body;
        const data = { name, surname, email};

        const isSuccess = await createNewUser(data);
        if(isSuccess){
            retVal.success = true;
            retVal.msg = 'Very good';
        }else {
            retVal.msg = 'Failed, try again later';
        }

		res.status(200).json(retVal);
	}
	catch(err) {
        //console.log(err);
		res.status(200).json([]);
	}
});

const createNewUser = async ({ name, surname, email }) => {
    try {
        const inputs = {
            "userid": email, 
            "creationdate": moment().format('DD/MM/YYYY HH:MM'), 
            "name": name,
            "surname": surname,
            "email": email,
        };
    
        const params = {
            TableName: "Users",
            Item:  inputs
        };

        docClient.put(params, function (err, data) {
            console.log({err});
            console.log({data});
        });

        return true;                     
    } catch (error) {
        console.log({error});
        return false;
    }
}

router.route('/loadUsers').get(async function (req, res) {
	try
	{
		let retVal = { success : false, msg : '', users: []};

        retVal.users = await fetchAllUsers();

		res.status(200).json(retVal);
	}
	catch(err) {
        //console.log(err);
		res.status(200).json([]);
	}
});

const fetchAllUsers = async () => {
    try {
        let params = {
            TableName: "Users",
        };
        let scanResults = [];
        let items = [];

        do{
            items =  await docClient.scan(params).promise();
            items.Items.forEach((item) => scanResults.push(item));
            params.ExclusiveStartKey  = items.LastEvaluatedKey;
        }while(typeof items.LastEvaluatedKey !== "undefined");

        return scanResults;
    } catch (error) {
        console.log({error});
        return [];
    }
}

module.exports = router;
