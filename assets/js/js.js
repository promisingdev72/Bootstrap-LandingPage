$(document).ready(function(){
    $(".anlytics-reporting-right-tab-item").click(function(){
        $(this).siblings().removeClass('tab-active');
        $(this).addClass('tab-active');
        var activeItemVal = $(this).attr("data-activeItem");
        if (activeItemVal) {
            var result = eval(activeItemVal);
            if(!result){
                return false;
            }
        }
    })
})
function activeItem(id){
    $("#"+id).siblings().removeClass('left-tab-item-active');
    $("#"+id).addClass('left-tab-item-active');
}


