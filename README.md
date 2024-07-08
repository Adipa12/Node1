# Node1
1> Create a file called "test.txt" in the same directory as your Node.js program and add some text to it.
Input: node index.js read test.txt
Expected output: The contents of the file "test.txt"
2> in the same "test.txt" directory as your Node.js program and add some text to it.(the new text should always be append in a new line)
Input: node index.js append "new content" test.txt
Expected output: "Content appended to the file 'test.txt'"
3> Create a file called "test.txt" in the same directory as your Node.js program and add some text to it.
Input: node index.js delete test.txt
Expected output: "File 'test.txt' deleted"
4> Create a file called "test.txt" in the same directory as your Node.js program
Input: node index.js create test.txt
Expected output: "File 'test.txt' created"
5> Create a file called "test.txt" in the same directory as your Node.js program and add some text to it.
Input: node index.js rename test.txt new.txt
Expected output: "File 'test.txt' renamed to 'new.txt'"
6> List of all files and directories in current dir
Input: node index.js list .
Expected output: A list of all files and directories in the current directory.