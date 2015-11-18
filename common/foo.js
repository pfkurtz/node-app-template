export default function foo(string) {
    if (string && typeof string !== 'string') {
        throw new Error(`Param is not a string.`);
    }

    return string || "bar";
}
