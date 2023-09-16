const search = require('./main');

/// find a text in inner object

describe('find a text in an object', () => {
  test('find Codewars in shallow object', () => {
    const obj = { test: 'Codewars' };
    expect(search(obj, 'Codewars')).toStrictEqual(['test']);
  });
  test('find Codewars in shallow object', () => {
    const obj = { graph: 'Codewars' };
    expect(search(obj, 'Codewars')).toStrictEqual(['graph']);
  });
  test('find Codewars in shallow object', () => {
    const obj = { graph: 'Codewars', shown: 'Codewars' };
    expect(search(obj, 'Codewars')).toStrictEqual(['graph', 'shown']);
  });
  test('find Codewars in shallow object', () => {
    const obj = { graph: 'Codewars', shown: 'Take' };
    expect(search(obj, 'Codewars')).toStrictEqual(['graph']);
  });
  test('find Codewars in shallow object', () => {
    const obj = { graph: 'Codewars', shown: 'Take' };
    expect(search(obj, 'Codewars')).toStrictEqual(['graph']);
  });
});

describe('find a text in deep object', () => {
  test('find Codewars in two stages of deep object', () => {
    const obj = { 
      graph: 'Codewars',
      shown: 'Take',
      place: {
        graph: 'Codewars',
        shown: 'Take',
      }
    };
    expect(search(obj, 'Codewars')).toStrictEqual(['graph', 'place.graph']);
  });
  test('find Codewars in two stages of deep object', () => {
    const obj = { 
      graph: 'Codewars',
      shown: 'Take',
      place: {
        graph: 'Codewars',
        shown: 'Codewars',
      }
    };
    expect(search(obj, 'Codewars')).toStrictEqual(['graph', 'place.graph', 'place.shown']);
  });
  test('find Codewars in two stages of deep object', () => {
    const obj = { 
      graph: 'Codewars',
      shown: 'Take',
      place: {
        graph: 'Codewars',
        shown: 'Codewars',
      },
      time: {
        graph: 'Codewars',
      },
    };
    expect(search(obj, 'Codewars')).toStrictEqual(['graph', 'place.graph', 'place.shown', 'time.graph']);
  });
  test('find Codewars in three stages of deep object', () => {
    const obj = { 
      graph: 'Codewars',
      shown: 'Take',
      place: {
        graph: 'Codewars',
        shown: 'Codewars',
        place: {
          graph: 'Codewars',
        },
      },
      time: {
        graph: 'Codewars',
      },
    };
    expect(search(obj, 'Codewars')).toStrictEqual(['graph', 'place.graph', 'place.place.graph', 'place.shown', 'time.graph']);
  });
  test('find Codewars in three stages of deep object', () => {
    var obj = {
      site: "Codewars",
      description: "Lorem ipsum dolor sit...",
      obj2: {
        str: "Yeah, Codewars!",
        num: 123,
        obj3: {
          something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
        }
      },
      nullProperty: null,
    };
    expect(search(obj, 'Codewars')).toStrictEqual(['obj2.obj3.something', 'obj2.str', 'site']);
  });
});