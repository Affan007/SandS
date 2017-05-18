module.exports =
{
	"dev": {
		"port": 3000,
		"mongo": {
			"port": "27017",
			"host": "localhost",
			"username": "",
			"password": "",
			"options": {
			   "server": {
			    "socketOptions": {
			     "keepAlive": true,
			     "connectTimeoutMS": 200000
			    }
			  }
		   }
		}
	}

}
