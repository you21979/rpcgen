class Type{
    constructor(type){
        this.dim = this._dim(type)
        this.name = this._get(type)
        this.isArray = this.dim > 0 ? true : false
        this.isPrimitive = this._is_primitive(this.name)
    }
    _get(type){
        const w = type.split("array<").reverse().shift()
        return w.split(">").shift()
    }
    _is_primitive(type){
        switch(type){
        case 'string':
        case 'number':
        case 'object':
        case 'any':
        case 'void':
        case 'boolean':
            return true
        }
        return false
    }
    _dim(type){
        const w = type.split("array<").reverse().shift()
        return w.split(">").length - 1
    }
}

module.exports = Type
