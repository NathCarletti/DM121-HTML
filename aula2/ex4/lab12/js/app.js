$("section").each(function(index){
    console.log($(this).attr('id'));
});

$("#box-languages div").each(function(index){
    $(this).css("background", "red");
});

//Ajax
$.ajax({
    url:"https://jsonplaceholder.typicode.com/user/1/posts",
    type:"GET",
    dataType:'jsonp',
    error:function(erro){
        console.log("Erro...")
    },
    success: function(dados){
        console.log(dados)
    }
});