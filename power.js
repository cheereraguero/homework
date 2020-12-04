function power(x, y){
    if (y === 0) return 1;

    let result = x;

    result = result * power(x, y - 1)

    return result
}