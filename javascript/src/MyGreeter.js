function MyGreeter() {
  this.greetingMessage = "";
}
MyGreeter.prototype = {
  constructor: MyGreeter,
  getGreeting() {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      this.greetingMessage = "Good morning";
    } else if (hour >= 12 && hour < 18) {
      this.greetingMessage = "Good afternoon";
    } else {
      this.greetingMessage = "Good evening";
    }
    return this.greetingMessage;
  },
};

MyGreeter.Client = function () {};

MyGreeter.Client.prototype = MyGreeter.prototype;

module.exports = MyGreeter;
