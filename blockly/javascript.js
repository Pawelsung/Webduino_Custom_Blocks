Blockly.JavaScript['get_time_ms'] = function(block) {
  var code = 'new Date().getTime();';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_time_seconds'] = function(block) {
  var code = 'Math.floor(Date.now() / 1000);';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
