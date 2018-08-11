var express = require('express');
var router = express.Router();









//Get Homepage
router.get('/', ensureAuthenticated,function(req,res){
	res.render('index');

	console.log(req.user.name);

});


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}



/*

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);
    
    //Disconnect
    socket.on('disconnect', function(data){
        users.splice(users.indexOf(socket.username),1);
        updateUsersnames();
        connections.splice(connections.indexOf(socket),1);
    console.log('Disconnected: %s sockets connected', connections.length);
    });
    
    socket.on('send message', function(data){
        io.sockets.emit('new message', {msg:data, user: socket.username});
    });
    
    //New User
    socket.on('new user', function(data, callback){
        callback(true);
        socket.username= data;
        users.push(socket.username);
        updateUsersnames();
    });
    
    
    function updateUsersnames(){
        io.sockets.emit('get users', users);
    }
});
*/
module.exports = router;