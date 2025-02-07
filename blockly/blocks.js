Blockly.Blocks['get_time_ms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GET_TIME_MS"]);  // 使用語言變數
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip(Blockly.Msg["GET_TIME_MS"]);
    this.setHelpUrl("");
  }
};
