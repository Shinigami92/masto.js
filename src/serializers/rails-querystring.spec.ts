/* eslint-disable unicorn/no-null */
import { railsQueryString } from './rails-querystring';

describe('railsQueryString', () => {
  it('encodes null', () => {
    const result = railsQueryString.stringify(null);
    expect(result).toBe('');
  });

  it('encodes an empty object', () => {
    const result = railsQueryString.stringify({});
    expect(result).toBe('');
  });

  it('encodes a basic record', () => {
    const result = railsQueryString.stringify({ key: 'value' });
    expect(result).toBe('key=value');
  });

  it('encodes a record with multiple values', () => {
    const result = railsQueryString.stringify({
      key1: 'value1',
      key2: 'value2',
    });
    expect(result).toBe('key1=value1&key2=value2');
  });

  it('encodes string safely', () => {
    const result = railsQueryString.stringify({
      q: 'https://neet.love',
    });
    // cspell:disable-next-line
    expect(result).toBe('q=https%3A%2F%2Fneet.love');
  });

  it('encodes an array inside a record', () => {
    const result = railsQueryString.stringify({
      key1: 'value1',
      key2: 'value2',
      key3: ['apple', 'facebook', 'microsoft'],
    });
    expect(result).toBe(
      'key1=value1&key2=value2&key3[]=apple&key3[]=facebook&key3[]=microsoft',
    );
  });
});
