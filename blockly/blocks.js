Blockly.Blocks['controls_get_time_ms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg["GET_TIME_MS"]);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip(Blockly.Msg["GET_TIME_MS"]);
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime");
  }
};
