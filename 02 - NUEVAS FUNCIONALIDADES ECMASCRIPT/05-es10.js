/* ---------------------------------- trim ---------------------------------- */

console.log("      hola             ".trim());

/* ---------------------------------- flat- --------------------------------- */

const array = [
    1, 
    2, 
    [
        2, 
        5
    ], 
    [
        5, 
        7
    ], 
    [
        8, 
        [
            4, 
            [
                8, 
                6
            ]
        ]
    ]
];

console.log(array.flat(3));

