'use strict';

class Options {
    constructor(defaults) {
        this.values = {};
        this.merge(defaults);
    }
    
    merge(options, allowNew) {
        if (allowNew) {
            Object.assign(this.values, options);
        } else {
            Object.keys(this.values).forEach(key => {
                if (options.hasOwnProperty(key)) {
                    this.values[key] = options[key];
                }
            });
        }
        
        return this;
    }
    
    get(name) {
        return this.values[name];
    }
    
    isOption(name) {
        return this.values.hasOwnProperty(name);
    }
    
    isDefined(name) {
        return this.values[name] !== undefined;
    }
    
    isDefinedAndNonNull(name) {
        return this.values[name] !== undefined && this.values[name] !== null;
    }
}

module.exports = Options;
