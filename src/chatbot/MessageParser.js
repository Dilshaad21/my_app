class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(this.state);
    const prevBotMessage = this.state.messages[this.state.messages.length - 1]
      .message;

    console.log(prevBotMessage);
    const newMessage = message.toLowerCase();
    // Beginning
    if (
      newMessage.includes("begin") &&
      prevBotMessage === "Type begin to start with the process..."
    ) {
      this.actionProvider.startProcess();
    }
    // Check if user has the documents
    else if (
      newMessage.includes("do not") &&
      prevBotMessage ===
        "To complete this you need any of the following: 1. PAN card 2.Aadhar card"
    ) {
      this.actionProvider.getDocCheck(false);
    } else if (
      newMessage.includes("have") &&
      prevBotMessage ===
        "To complete this you need any of the following: 1. PAN card 2.Aadhar card"
    ) {
      this.actionProvider.getDocCheck(true);
    }
    // Phone number OTP verify at the beggining
    else if (
      prevBotMessage ===
      "Please send me your number to send you the OTP to verify." || prevBotMessage === "This is not a valid number"
    ) {
        // console.log(newMessage.length===10);
      if (!isNaN(newMessage) && newMessage.length===10) {
        this.actionProvider.getNumberCheck(true);
      } else {
        this.actionProvider.getNumberCheck(false);
      }
    }
    // User enters the OTP
    else if(prevBotMessage === "Please enter the OTP below"){
        
        // Provieded OTP check is successful
        console.log("The OTP entered", newMessage);
        this.actionProvider.getOTPcheck(true);
    }
    // OTP is verified and ask user to enter Aadhar number to verify with the phone number
    else if(prevBotMessage === "Now Enter Aadhar card details"){
        // Check if Aadhar card number is valid
        this.actionProvider.getAadharCheck(true);
    }
  }
  // Phone number check
}

export default MessageParser;
