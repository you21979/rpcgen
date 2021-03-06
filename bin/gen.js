#!/usr/bin/env node
const App = require("../lib/app")
const program = require("commander")

program
  .version('0.1.0')
  .option('-i, --input <n>', 'xml')
  .option('-t, --template <n>', 'numjucks template')
  .parse(process.argv);

const main = (program) => {
    const app = new App(program.input)
    app.parse()
    const o = app.build(program.template)
    console.log(o)
}

main(program)

