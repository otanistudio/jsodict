(function(){
    'use strict';
    var _gcn = function(className) { return document.getElementsByClassName(className)[0]; },
        $output = _gcn('output'),
        $rawJSON = _gcn('raw_json');
    _gcn('raw_json').onkeyup = function(evt) {
        try {
            $output.className = 'output'; 
            $output.value = Dictionary.stringify(JSON.parse($rawJSON.value), null, '  ');                      
        } catch (ex) {
            $output.className = 'output error';
            $output.value = ex.message;
        }
    };
})();
