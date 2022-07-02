
        $(document).ready(function () {
            $("#ulBrand").hide()
            $("#btnBrand").click(function () {
                $("#ulBrand").slideToggle(200)
            })
            $("#ulBrand").mouseleave(function(){
                $("#ulBrand").hide()
            })
            
        })
   
        