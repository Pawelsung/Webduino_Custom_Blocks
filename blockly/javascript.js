Blockly.JavaScript['controls_get_time_ms'] = function(block) {
  var code = 'new Date().getTime()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
