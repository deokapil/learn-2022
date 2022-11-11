// Because the module is cached, every module that requires the logger
// module will actually always retrieve the same instance of the object,
// thus sharing its state.

class Logger {
  constructor(name) {
    this.count = 0;
    this.name = name;
  }
  log(message) {
    this.count++;
    console.log("[" + this.name + "] " + message);
  }
}
module.exports = new Logger("DEFAULT");
