angular.module("test", [])
	.controller("ChatController", function () {
		chat = this;
		chat.messages = [{author:"Nico", message:"Stuff"}, {author:"Evan", message:"Things"}];
		chat.addMessage = function() {
			chat.messages.push({author:chat.newAuthor,message:chat.newMessage});
		}
	});