// Найти сочетания n элементов всеми возможнчми способами (порядок сочетания не важен)
// http://www.matburo.ru/tv_komb.php

var unArr = [0, 1, 2],
    n = 2,
    ind = start = middle = end = 0,
    mlgt = n - 2;
    unArrLgt = unArr.length;
    arr = [];

function endIter(s,m,e) {
    // arrN = [];
     while (e < unArrLgt) {
         arr.push(unArr.slice(s, s + 1).concat(unArr.slice(m, m + mlgt)).concat(unArr.slice(e, e + 1)));
            // arrN.push(unArr.slice(s, s + 1));
            // arrN.push(unArr.slice(m, m + mlgt));
            // arrN.push(unArr.slice(e, e + 1));
        e++;
        // console.log(arr);
    }
}

if (unArrLgt < n ) {
    console.log('Колличество чисел для умножения меньше размера массива');
} else {
    middle = start + 1; 
    end = start + (n - 1);
    if (middle === end) {middle++}
    while (start < unArrLgt - ( n - 1)) {
        while (middle < unArrLgt - ( n - 2) ) {
            endIter(start, middle, end);
            middle++;
            end++;
        }
        start++;
        middle = start + 1;
        end = start + (n - 1);
    }
    console.log(arr);
}