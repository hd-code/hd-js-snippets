import * as vector from "./vector";
import { testFunc } from "./testutil";

// -----------------------------------------------------------------------------

describe("vector", () => {
    testFunc(vector.isVector, [
        [[[1, 2, 3]], true],
        [[[]], true],
        [[[1, "2", 3]], false],
        [["1,2,3"], false],
        [[null], false],
        [[undefined], false],
    ]);

    // ---------------------------------------------------------------------------

    testFunc(vector.avg, [
        [[[1, 2, 3]], 2],
        [[[0.5, 2, 5.2]], 7.7 / 3],
        [[[1, -2, 3]], 2 / 3],
        [[[]], 0],
    ]);

    testFunc(vector.mag, [
        [[[1, 2, 3]], Math.sqrt(1 + 4 + 9)],
        [[[0.5, 2, 5.2]], Math.sqrt(0.25 + 4 + 27.04) + 0.000000000000001],
        [[[1, -2, 3]], Math.sqrt(1 + 4 + 9)],
        [[[]], NaN],
    ]);

    testFunc(vector.median, [
        [[[]], 0],
        [[[1]], 1],
        [[[1, 2]], 1.5],
        [[[2, 1]], 1.5],
        [[[1, 2, 3]], 2],
        [[[1, 3, 2]], 2],
        [[[1, 2, 3, 4]], 2.5],
        [[[4, 3, 2, 1]], 2.5],
        [[[3, 1, 4, 2]], 2.5],
        [[[1, 9, 2, 8, 3, 7, 4, 6, 5]], 5],
    ]);

    testFunc(vector.quickselect, [
        [[[], 0], 0],
        [[[], 2], 0],
        [[[1], 0], 1],
        [[[1], 2], 1],
        [[[1, 2], 0], 1],
        [[[2, 1], 0], 1],
        [[[1, 2], 1], 2],
        [[[2, 1], 1], 2],
        [[[1, 9, 2, 8, 3, 7, 4, 6, 5], 0], 1],
        [[[1, 9, 2, 8, 3, 7, 4, 6, 5], 4], 5],
        [[[1, 9, 2, 8, 3, 7, 4, 6, 5], 4.2], 5],
        [[[1, 9, 2, 8, 3, 7, 4, 6, 5], 4.7], 5],
        [[[1, 9, 2, 8, 3, 7, 4, 6, 5], -2], 1],
        [[[1, 9, 2, 8, 3, 7, 4, 6, 5], 12], 9],
    ]);

    testFunc(vector.sum, [
        [[[1, 2, 3]], 6],
        [[[0.5, 2, 5.2]], 7.7],
        [[[1, -2, 3]], 2],
        [[[]], 0],
    ]);

    // ---------------------------------------------------------------------------

    const data = [
        { vec1: [], vec2: [], add: [], sub: [], mul: [], div: [] },
        { vec1: [1], vec2: [2], add: [3], sub: [-1], mul: [2], div: [0.5] },
        {
            vec1: [12, 4],
            vec2: [6, 3],
            add: [18, 7],
            sub: [6, 1],
            mul: [72, 12],
            div: [2, 4 / 3],
        },
        { vec1: [1, 2], vec2: [3], add: [], sub: [], mul: [], div: [] },
        { vec1: [1], vec2: [2, 3], add: [], sub: [], mul: [], div: [] },
    ];

    [vector.add, vector.sub, vector.mul, vector.div].forEach((func) => {
        const name = func.name as keyof (typeof data)[0];
        const cases: [[vector.Vector, vector.Vector], vector.Vector][] =
            data.map((d) => [[d.vec1, d.vec2], d[name]]);
        testFunc(func, cases);
    });

    // ---------------------------------------------------------------------------

    testFunc(vector.scale, [
        [
            [1, [1, 2, 3]],
            [1, 2, 3],
        ],
        [
            [0, [1, 2, 3]],
            [0, 0, 0],
        ],
        [
            [-1, [1, 2, 3]],
            [-1, -2, -3],
        ],
        [
            [6.5, [1, 2, 3]],
            [6.5, 13, 19.5],
        ],
        [
            [-0.5, [-12, 3.3, -0.3]],
            [6, -1.65, 0.15],
        ],
    ]);

    testFunc(vector.dot, [
        [
            [
                [1, 2, 3],
                [4, 5, 6],
            ],
            32,
        ],
        [
            [
                [0.5, -1.3, 30.3],
                [-0.2, -2.2, -6],
            ],
            -179.04000000000002,
        ],
        [
            [
                [1, -3],
                [0, 0],
            ],
            0,
        ],
        [
            [
                [0, 0],
                [1, -3],
            ],
            0,
        ],
        [[[1], [2]], 2],
        [[[1, 2], [3]], NaN],
        [[[], [1]], NaN],
        [[[], []], NaN],
    ]);

    testFunc(vector.mulMatrix, [
        [
            [[1], [[1, 2, 3]]],
            [1, 2, 3],
        ],
        [
            [
                [1, 2, 3],
                [
                    [1, 2],
                    [3, 4],
                    [5, 6],
                ],
            ],
            [22, 28],
        ],
        [
            [
                [-3.2, 2.2],
                [
                    [1, 3],
                    [2, 3],
                ],
            ],
            [1.2000000000000002, -3.000000000000001],
        ],
        [[[1, 2], [[1, 2, 3]]], []],
        [[[1], [[1], [2], [3]]], []],
    ]);
});
