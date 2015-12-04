import settings from '../common/settings';
console.log("\nsettings:", settings);

type Foo = string|number;
function foo(bar: Foo): Foo {
    console.log(`foo: ${bar}`);
    return bar;
}

foo(42);

const bar = {
    number: 42
};

const baz = {
    ...bar,
    number2: 33
};

console.log(baz);
