
var baseUrl='http://localhost:8000/'
var user = {
    logout:function(){
        $.post(baseUrl+'admin/logout',function(res){
        console.log(res);
        if(res.code===200){
            window.location.href='./login.html'
        }                
    })
}
,
   getIfo:function(){
       $.get(baseUrl+'admin/getuser',function(res){
        if(res.code===200){
            $('#userImg').prop('src',res.data.user_pic)
            $('#userName').text(res.data.nickname)
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
