(function() {
    $('#result').on('click', 'li', function() {
        var self = $(this);
        var id =self.data('id');
        location.href = 'item-mobile.html?id=' + id;
    });
})();

(function() {
    $(document).ready(function(){
        var id = url.substring(url.lastIndexOf('=') + 1);
        var self = $(this);
        var id =self.data('id');
    })
});