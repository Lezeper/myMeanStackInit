var username = "ledzeper";
var password = "123";
var databaseName = "starter";
var hosting = "localhost";

module.exports = {
	"username": username,
	"password": password,
	"databaseName": databaseName,
	"hosting": hosting,
    "database": "mongodb://"+ username +":"+ password +"@"+ hosting +"/"+ databaseName,
    "port": process.env.PORT || 8123,
    "secretKey": "YourSecreKey"
};
