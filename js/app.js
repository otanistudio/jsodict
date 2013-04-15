(function(){
    $('.raw_json').keyup(function(evt) {
        var rawJSON = $(".raw_json").val();
        try {
            var oDict = Dictionary.stringify(JSON.parse(rawJSON), null, '  ');
            $(".output").removeClass('error').val(oDict);                     
        } catch (ex) {
            $(".output").addClass('error').val(ex.message);
        }
    });
})();
