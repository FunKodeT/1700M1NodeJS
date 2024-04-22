const helloFunction = (req,res) => {
    res.send("Hello World!");
};
const ttechFunction = (req,res) => {
    res.send("Tooele Tech is Awesome")
}
module.exports = {helloFunction, ttechFunction};