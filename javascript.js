
const url ="https://raw.githubusercontent.com/ananda006hg/https-nodeJs-webservice-example/master/json.txt";
$(document).ready(function(){

        $.getJSON(url, {}, function(data) {
            var $ul = $('#ct')
            $.each(data, function(idx, item){
             
                $ul.append('<li class="name">
				<img width="50px"src="' + item.avatar_url + '" id="itemImg">
				<div>'+item.first_name+'<span>'+" "+item.last_name+'</span></div>
				<div><b>'+item.title+'</b></div><
				/li>')
            })
       
    });
});