let xrsTarget = ".xrs-container > div"
$('.xrs-container > div').click(function(){
    let eb = $(this);
    $(xrsTarget).removeClass('xrs-active');
    eb.addClass('xrs-active')

    $(".xrs-tabs").removeClass('xrs-active')
    $(".xrs-tabs:not(.xrs-active)").hide();
    let xrsTab = eb.attr('data-xrs-tab');
    $(xrsTab).addClass('xrs-active');
    $(xrsTab).fadeIn();

    return false;
})
$('.xrs-container > div.xrs-active').click()