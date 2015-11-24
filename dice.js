$(document).ready(function(){
    $( '.dice' ).click(function() {
        $("#"+this.id).toggleClass('active');
    });
});
