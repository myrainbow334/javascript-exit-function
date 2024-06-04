console.log( "A" - "B" + 2);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());