Blockly.Blocks['get_time_ms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("取得目前時間（毫秒）");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("取得當前的時間戳記（毫秒）");
    this.setHelpUrl("");
  }
};
