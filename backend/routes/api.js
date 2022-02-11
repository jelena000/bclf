const express = require('express');
const router = express.Router();
const multer = require('multer');
const AWS = require("aws-sdk");

let awsConfig = {
    "region": "eu-central-1",
    "endpoint": "http://dynamodb.eu-central-1.amazonaws.com",
    "accessKeyId": "AKIAZJFGRM2V4S2A2TH6", 
    "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();
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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.route('/login').post(async function (req, res) {
	try
	{
		var retVal = { success : false, msg : ''};
		if (!req.body) {res.status(200).json(retVal);  return;}

        let query = 'SELECT * FROM "Admin" WHERE "username" = $1';
        const admins = await pool.query(query,[req.body.username]);


        retVal.idToken = token;
		res.status(200).json(retVal);
	}
	catch(err) {
        //console.log(err);
		res.status(200).json([]);
	}
});

router.route('/loadUsers').get(async function (req, res) {
	try
	{
		let retVal = { success : false, msg : ''};

        retVal.users = await fetchAllUsers();

		res.status(200).json(retVal);
	}
	catch(err) {
        //console.log(err);
		res.status(200).json([]);
	}
});

module.exports = router;
