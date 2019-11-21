var user = {
    logout:function(){
        $.post('http://localhost:8000/admin/logout',function(res){
        console.log(res);
        if(res.code===200){
            window.location.href='./login.html'
        }                
    })
}
,
    login: function(){
                    // $.post(地址，参数，回调)
       $.post('http://localhost:8000/admin/login',
         {user_name:myName,password:myPassword},
         function(res){
            console.log(res);
         if(res.code===200){
            
            location.href='./index.html'
         }else{
            $('#myModal').modal('show')
            $('#msgInfo').text(res.msg)
         }
        
    })
    }
}
