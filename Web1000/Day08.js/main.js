$(document).ready(function(){
$.ajax({
    url:"http://api.open-notify.org/astros.json",
    dataType: "json",
    method: "get",
    success: function(res){
        console.log(res);

        for(var i = 0; i < res.people.length; i++){
            $("#All").append("<tr><td>" + res.people[i].name +"</td><td>" + res.people[i].craft + "</td></tr>")
        }
    }
 });
})
