import fs from 'fs';
import path from 'path';

export const openFile = (fileName: string):Boolean => {
    let returnValue = false;
    const fileWithPath = path.join(`test/${fileName}`);
    // download file
    fs.readFile(fileWithPath, (err, data) => {
        if(!err) {
            console.log("file exists!!")
            returnValue = true;
        }
    });
    return returnValue;
};