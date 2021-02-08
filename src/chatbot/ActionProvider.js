class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  startProcess = () => {
    const Messages = [
      this.createChatBotMessage(
        "To begin with the process let's make sure you have all the documents needed for this process"
      ),
      this.createChatBotMessage(
        "To complete this you need any of the following: 1. PAN card 2.Aadhar card"
      ),
    ];
    this.addMessageToState(Messages);
  };

  getDocCheck = (nameCheck, phoneCheck, status) => {
    if (status === false) {
      const message = this.createChatBotMessage(
        "Your KYC cannot be done in that case"
      );
      this.addMessageToState(message);
    } else {
      if (nameCheck) {
          const message = this.createChatBotMessage("Please enter your name as given in your Aadhar");
          this.addMessageToState(message);
      } else if(phoneCheck){
        const messages = [
          this.createChatBotMessage(
            "Great! Now the first thing you need to do is that you need to verify your phone number."
          ),
          this.createChatBotMessage(
            "Please send me your number to send you the OTP to verify."
          ),
        ];
        this.addMessageToState(messages);
      }
    }
  };

  getNumberCheck = (status) => {
    if (status === false) {
      const message = this.createChatBotMessage("This is not a valid number");
      this.addMessageToState(message);
    } else {
      // Code to send OTP can be implemented here

      const message = this.createChatBotMessage("Please enter the OTP below");
      this.addMessageToState(message);
    }
  };

  getOTPcheck = (status) => {
    if (status === false) {
      const message = this.createChatBotMessage("The OTP is not correct");
      this.addMessageToState(message);
    } else {
      const message = [
        this.createChatBotMessage("OTP is correct and phone number verified"),
        this.createChatBotMessage("Now Enter Aadhar card details"),
      ];
      this.addMessageToState(message);
    }
  };

  getAadharCheck = (status) => {
    if (status === false) {
      const message = this.createChatBotMessage(
        "Aadhar card phone number doesn't match with you phone number"
      );
      this.addMessageToState(message);
    } else {
      const message = this.createChatBotMessage(
        "Aadhar linked phone number verified!"
      );
      this.addMessageToState(message);
    }
  };
  addMessageToState = (Messages) => {
    if (Array.isArray(Messages)) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, ...Messages],
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, Messages],
      }));
    }
  };
}

export default ActionProvider;
