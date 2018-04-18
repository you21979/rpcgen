const Type = require("./type")
const util = require("./util")

class Corder {
    constructor(lang, param){
        this.param = param
    }
    getName(){
        const name = this.param.type.name
        if(!this.param.type.isPrimitive){
            return "I" + name
        }else{
            switch(name){
            case "any":
                return "object"
            case "int":
                return "number"
            default:
                return name
            }
        }
    }
    

    functionName(){
        const w = this.param.name.split(".")
        const namespace = w.slice(0, -1)
        const method = w.slice(-1)
        return namespace.join("_") + "_" + util.makeLowerCamelCase(method.join(""), "_")
    }
    declareType(){
        const name = this.param.type.name
        const w = []
        for(let i = 0; i < this.param.type.dim; ++i){
            w.push("Array<")
        }
        w.push(this.getName())
        for(let i = 0; i < this.param.type.dim; ++i){
            w.push(">")
        }
        return w.join("")
    }
}


class Param{
    constructor(name, type, desc){
        this.name = name
        this.desc = desc
        this.type = new Type(type)
        this.corder = new Corder("typescript", this)
    }
}

module.exports = Param