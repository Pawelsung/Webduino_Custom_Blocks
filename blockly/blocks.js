Blockly.Blocks['get_time_ms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GET_TIME_MS"]);  // 使用多語言翻譯
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("取得當前的時間戳記（毫秒）");
    this.setHelpUrl("");
  }
};
