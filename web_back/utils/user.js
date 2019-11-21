var baseUrl='http://localhost:8000/'
var user = {
    logout:function(myName,myPassword){
        $.post(baseUrl+'admin/logout',function(res){
        console.log(res);
        if(res.code===200){
            window.location.href='./login.html'
        }                
    })
}
,
    login: function(myName,myPassword){
                    // $.post(地址，参数，回调)
       $.post(baseUrl+'admin/login',
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
