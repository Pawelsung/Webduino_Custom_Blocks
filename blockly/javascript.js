Blockly.JavaScript['get_time_ms'] = function(block) {
  var code = 'new Date().getTime();';  // 取得當前的毫秒時間戳
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
