outer: for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        if (i == 2 && j == 2) {
            console.log('continue outer');
            continue outer;
        }
        console.log(`[i: ${i} e j: ${j}]`);
    }
}