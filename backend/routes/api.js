const express = require('express');
const router = express.Router();
const multer = require('multer');
//const awsConfig = require('../config/aws-config');
//const AWS = require("aws-sdk");
const pool = require("../database");

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
//AWS.config.update(awsConfig);
//const docClient = new AWS.DynamoDB.DocumentClient();

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
        
        const { 
            completedSteps,
            name, surname, email, phone, country, city, postalCode, organisation, adress, dietary, invitationLetter,
            registrationPlan,
            shouldAccommodate, arrivalDate, departureDate, nights, roomDeposit, noteAccommodate,
            arrivalTransfer, arrivalPersonsTransfer, arrivalDateTransfer, arrivalFlightTransfer, arrivalFromTransfer, departureTransfer,
            departurePersonsTransfer, departureDateTransfer, departureFlightTransfer, departureFromTransfer, 
            invoiceIssue, invoiceCompany, invoiceCountry, invoiceCity, invoiceAdress, invoiceRegNum, invoiceTax
        } = req.body;

        const params = [ 
            'Mr.',name, surname, email, phone, country, city, postalCode, organisation, adress, dietary, invitationLetter,
            shouldAccommodate, arrivalDate,  nights, roomDeposit, noteAccommodate,
            arrivalTransfer, arrivalPersonsTransfer, arrivalDateTransfer, arrivalFlightTransfer, arrivalFromTransfer,
            departurePersonsTransfer,departureDateTransfer,  departureFlightTransfer, departureFromTransfer,
            invoiceIssue,invoiceCompany, invoiceCountry, invoiceCity, invoiceAdress, invoiceRegNum, invoiceTax,
            registrationPlan ? registrationPlan.price : "",
            registrationPlan ? registrationPlan.name : "",
        ];


        const queryInsertAccount = `INSERT INTO "user" (
            title, name, surname, email, phone, 
            country, city, postalcode, organisation, adress, dietary, invitationletter, shouldaccommodate, 
            arrivaldate, nights, roomdeposit, noteaccommodate, arrivaltransfer, arrivalpersonstransfer, 
            arrivaldatetransfer, arrivalflighttransfer, arrivalfromtransfer, departurepersonstransfer, departuredatetransfer, 
            departureflighttransfer, departurefromtransfer, invoiceissue, invoicecompany, invoicecountry, invoicecity, 
            invoiceadress, invoiceregnum, invoicetax, registrationname, registrationprice)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35)  
            RETURNING id
        `;
        const { rows } = await pool.query(queryInsertAccount, params);
        if((rows.length > 0)){
            retVal.success = true;
            retVal.msg = 'Very good';
            console.log({rows});
        }else {
            retVal.msg = 'Failed, try again later';
        }

		res.status(200).json(retVal);
	}
	catch(err) {
        console.log(err);
		res.status(200).json([]);
	}
});
/*
const createNewUser = async (data) => {
    try {
        const inputs = {
            ...data,
            "userid": data.email, 
            "creationdate": moment().format('DD/MM/YYYY HH:MM'), 
            "name": data.name,
            "surname": data.surname,
            "email": data.email,
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
*/
module.exports = router;
