$("").ready(function(){

var firstnames=[];
var lastnames=[];
var emails=[];
var comments=[];

$(".formbutton").click(function(){
	storeit();
});

function storeit(){
	var name1= $(".first").val();
    var name2= $(".last").val();
    var email=$(".email").val();
    var comment=$(".comment").val();
    
    firstnames.push(name1);
    lastnames.push(name2);
    emails.push(email);
    comments.push(comment);
	
    console.log(firstnames);
    console.log(lastnames);
    console.log(emails);
    console.log(comments);
}

});