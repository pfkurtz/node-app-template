import settings from '../common/settings';
console.log("\n*** Starting Main Node Program ***\nsettings:", settings);

type Foo = string|number;
function foo(bar: Foo): Foo {
    console.log(`foo: ${bar}`);
    return bar;
}

foo(42);
