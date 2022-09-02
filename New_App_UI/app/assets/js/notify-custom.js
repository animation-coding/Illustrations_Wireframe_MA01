
(function ($) {
    /// Notify Init ///
    $(".btn-e").click(() => {
        if ($(".email").val() == "") {
            $.notify("Please Enter Email");
        } else {
            $.notify("Your Email Has Been Received", "success");
        }
    });


    //// Add To Cart ////
    $(".add-to-cart").click(() => {
        if ($(".item-no").val() == 0) {
            $.notify("Please Select Quantity");
        } else {
            $.notify("Add To Cart Success", "success");
        }
    });

    //// Coupon Apply ////
    $(".apply").click(() => {
        $.notify("Coupon Active", "success");
    });
})(jQuery);