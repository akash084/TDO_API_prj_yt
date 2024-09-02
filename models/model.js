//Setting up the mongodb
//Importing mongoose
const mongoose = require("mongoose");

//connecting to the database
const connect = mongoose.connect(
	//replace the following with your own url
	"mongodb+srv://<REPLACETHIS_WITH_YOUR_USER_NAME>:<REPLACE_THIS_WITH_db_password>@cluster0.nmtidmk.mongodb.net/<REPLACE_THIS_WITH_DB_NAME>?retryWrites=true&w=majority&appName=<REPLACE_THIS_WITH_CLUSTER_NAME>"
);

// check the database connection
connect
	.then(() => {
		console.log("Database connected succesfully");
	})
	.catch(() => {
		console.log("Database can not be connected");
	});

const TodoSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

//Creating the collections(users and shop) for the databases
const collection2 = new mongoose.model("todo", TodoSchema);

module.exports = { collection2 };
