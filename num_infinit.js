
    let nums = 150
    
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        if (num > max_num) {
            max_num += 1
        }
    }
    console.assert(max_num)
