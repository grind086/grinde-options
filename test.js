const Options = require('./');

function makeGenericOptions() {
    var defaults = {
        prop1: 'string 1',
        prop2: 'string 2',

        typeBoolean: true,
        typeNull: null,
        typeUndefined: undefined,
        typeNumber: 0,
        typeString: 'string',
        typeObject: {}
    };
    
    return new Options(defaults)
}

test('Merge options without modifying defaults', () => {
    var defaults = {
        o1: 'v1',
        o2: 'v2'
    };
    
    var options = new Options(defaults).merge({
        o2: 'v3',
        o3: 'v4'
    });
        
    expect(defaults).toEqual({ o1: 'v1', o2: 'v2' });
    expect(options.values).toEqual({ o1: 'v1', o2: 'v3', o3: 'v4' });
});

test('Merge multiple options', () => {
    var defaultsA = { a1: 'av1', a2: 'av2' },
        defaultsB = { b1: 'bv1', b2: 'bv2' };
        
    var options = new Options(defaultsA).merge(defaultsB).merge({
        a1: 'cv1', b2: 'cv2', c1: 'cv3'
    });
    
    expect(options.values).toEqual({ a1: 'cv1', a2: 'av2', b1: 'bv1', b2: 'cv2', c1: 'cv3' });
});

test('get()', () => {
    var options = makeGenericOptions();
    
    expect(options.get('prop1')).toBe('string 1');
    expect(options.get('prop2')).toBe('string 2');
    expect(options.get('typeBoolean')).toBe(true);
    expect(options.get('typeNull')).toBe(null);
    expect(options.get('typeUndefined')).toBe(undefined);
    expect(options.get('typeNumber')).toBe(0);
    expect(options.get('typeString')).toBe('string');
    expect(options.get('typeObject')).toEqual({});
    
    expect(options.get('fakeProp')).toBe(undefined);
});

test('isOption()', () => {
    var options = makeGenericOptions();
    
    expect(options.isOption('prop1')).toBe(true);
    expect(options.isOption('prop2')).toBe(true);
    expect(options.isOption('typeBoolean')).toBe(true);
    expect(options.isOption('typeNull')).toBe(true);
    expect(options.isOption('typeUndefined')).toBe(true);
    expect(options.isOption('typeNumber')).toBe(true);
    expect(options.isOption('typeString')).toBe(true);
    expect(options.isOption('typeObject')).toBe(true);
    
    expect(options.isOption('fakeProp')).toBe(false);
});

test('isDefined()', () => {
    var options = makeGenericOptions();
        
    expect(options.isDefined('prop1')).toBe(true);
    expect(options.isDefined('prop2')).toBe(true);
    expect(options.isDefined('typeBoolean')).toBe(true);
    expect(options.isDefined('typeNull')).toBe(true);
    expect(options.isDefined('typeUndefined')).toBe(false);
    expect(options.isDefined('typeNumber')).toBe(true);
    expect(options.isDefined('typeString')).toBe(true);
    expect(options.isDefined('typeObject')).toBe(true);
    
    expect(options.isDefined('fakeProp')).toBe(false);
});

test('isDefinedAndNonNull()', () => {
    var options = makeGenericOptions();
        
    expect(options.isDefinedAndNonNull('prop1')).toBe(true);
    expect(options.isDefinedAndNonNull('prop2')).toBe(true);
    expect(options.isDefinedAndNonNull('typeBoolean')).toBe(true);
    expect(options.isDefinedAndNonNull('typeNull')).toBe(false);
    expect(options.isDefinedAndNonNull('typeUndefined')).toBe(false);
    expect(options.isDefinedAndNonNull('typeNumber')).toBe(true);
    expect(options.isDefinedAndNonNull('typeString')).toBe(true);
    expect(options.isDefinedAndNonNull('typeObject')).toBe(true);
    
    expect(options.isDefinedAndNonNull('fakeProp')).toBe(false);
});
