export function calcutions() {
    let fact = 0;
    for (let i = 1; i <= 70000; i++) {
        console.log('calling...', i)
        fact = fact + i;
    }
    return fact;
}
