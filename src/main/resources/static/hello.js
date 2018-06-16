class Person {
	   constructor(id,title,content,createdAt,updatedAt){
		   this.id=id;
		   this.title=title;
		   this.content=content;
		   this.createdAt=createdAt;
		   this.updatedat=updatedAt;
	   }
	}




angular.module('spring-boot-mysql-rest-api-tutorial', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8080/api/notes').
        then(function(response) {
            $scope.greeting = response.data;
        });
});