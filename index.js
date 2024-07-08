const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2); 

if(args.length <2){
    console.log('Usage: node index.js <operation> <filename> [text]');
    process.exit(1);
}

const operation = args[0];
const filename = args[1];
const filePath = path.join(__dirname, filename);

switch(operation){
    case 'read':
        readFile(filePath)
        break;
    case 'append':
        if(args.length <3){
            console.log('Usage: node index.js append <filename> [text]');
            process.exit(1);
        }
        const text =args.slice(2).join(' ');
        appendToFile(filePath, text);
        break;
    case 'delete':
        deleteFile(filePath);
        break;
    case 'create':
        createFile(filePath);
        break;
    case 'rename':
        if (args.length < 3) {
            console.log('Usage: node index.js rename <oldfilename> <newfilename>');
            process.exit(1);
        }
        const newFilename = args[2];
        renameFile(filePath, newFilename);
        break;
    case 'list':
        listFiles(filename); // filename should be the directory in this case
        break;
    default:
        console.log('Invalid operation');
}
function readFile(filePath){
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            console.log('error readind file', err);
        }
        console.log('File contents:\n',data);
    });
}
function appendToFile(filePath, text){
        fs.appendFile(filePath,text + '\n', (err)=>{
            if (err) {
                console.error('Error appending to file:', err);
                process.exit(1);
            }
            console.log('Content appended to the file', path.basename(filePath));
        });
}
function deleteFile(filePath){
    fs.unlink(filePath,(err)=>{
        if (err) {
            console.error('Error deleting file:', err);
            process.exit(1);
        }
        console.log(`File '${path.basename(filePath)}' deleted`);
    });
}
function createFile(filePath) {
    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.error('Error creating file:', err);
            process.exit(1);
        }
        console.log(`File '${path.basename(filePath)}' created`);
    });
}
function renameFile(oldPath, newFilename){
    const newPath = path.join(path.dirname(oldPath), newFilename);
    fs.rename(oldPath, newPath, (err)=>{
        if (err) {
            console.error('Error renaming file:', err);
            process.exit(1);
        }
        console.log(`File '${path.basename(oldPath)}' renamed to '${path.basename(newPath)}'`);

    });
}
function listFiles(directory){
    fs.readdir(directory,(err,files)=>{
        if (err) {
            console.error('Error listing files:', err);
            process.exit(1);
        }
        console.log('Files and directories in' , directory, ':\n', files.join('\n'));
    });
}



// fs.writeFile("./test.txt","This is the editable data which i put in it through fs.write module",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File created");
// });

// fs.writeFileSync("./test.txt","Now i append some data in it..") //it is used to overwrite the data.
// console.log("ok hai ji");

//for  appending the data on same line
// fs.appendFile("./test.txt","Add another line ...",(err)=>{
//     if(err){
//         console.log(err)
//     }
// });

// fs.appendFileSync("./test.txt","Add a new line..",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.readFile("./test.txt","utf-8",(err, data)=>{ // it is used to read the data
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

