const X = {
    a : 1,
    b : 2,
};

Object.freeze(X);

console.log(Object.isFrozen(X));

console.log(Object.getOwnPropertyDescriptors(X));
// property descriptors 會包含：
// value, 
// writable, 
// enumerable: 可否列舉，例如透過 for-in 、object.keys 取得
// configurable