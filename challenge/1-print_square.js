#!/usr/bin/node
/*
 * Print a square using the character '#'.
 *
 * The size of the square is provided as the first
 * command-line argument.
 */

if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

// Parse the size argument as a base-10 integer
size = parseInt(process.argv[2], 10);

// Loop through rows
for (let i = 0; i < size; i++) {
    // Loop through columns
    for (let j = 0; j < size; j++) {
        process.stdout.write("#");
    }
    // Move to the next line after each row
    process.stdout.write("\n");
}
