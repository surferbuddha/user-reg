var user_reg = angular.module("user-reg", []);
// Register Service
user_reg.service("RegisterService" , function(){
    var uid = 1;
    var users = [{
    'id' : 0,
    'firstname' : 'Elijah',
    'lastname' : 'Waters',
    'npi' : '123',
    'address' : '123 st drive',
    'phone' : '8087765646',
    'email' : 'jahmail@gmail.com'}]; 
     
     // Save User
    this.save = function(user)  
    {
        if(user.id == null)                       
        {
            user.id = uid++;
            users.push(user);
        }
        else
        {
            for(var i in users)
            {
                if(users[i].id == user.id)
                {
                    users[i] = user;
                }
            }
        }
    };
    
          
     // List Users
    this.list = function()
    {
    return users;
    }; 
});

// Register Controller 
user_reg.controller("RegisterController" , function($scope , RegisterService){
console.clear();
$scope.title ="User List";
$scope.users = RegisterService.list();
$scope.saveUser = function()
{
    console.log($scope.newuser);
    if($scope.newuser == null || $scope.newuser == angular.undefined)
        return;
    RegisterService.save($scope.newuser);
    $scope.newuser = {};
}; 
    
});