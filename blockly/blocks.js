Blockly.Blocks['get_time_ms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GET_TIME_MS"]);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip(Blockly.Msg["GET_TIME_MS"]);
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_time_seconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GET_TIME_SECONDS"]);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip(Blockly.Msg["GET_TIME_SECONDS"]);
    this.setHelpUrl("");
  }
};
