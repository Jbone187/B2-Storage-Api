let {
    exec
} = require('child_process');

let fs = require('fs');
let aug = process.argv[2];

let dir = aug;
//let dir = "./some/";
let arr = [];

fs.readdir(dir, function (err, files) {
    console.log(files);

    for (data of files) {
        arr.push(data);

    };

    for (let i = 0; i < arr.length; i++) {
        //B2 Storage cli commands
        exec(`b2 upload_file Plex-150 ${dir}/${arr[i]} data/${arr[i]}`, function (err, stdout, stderr) {
            console.log(stdout, stderr);

        });
    };

});
