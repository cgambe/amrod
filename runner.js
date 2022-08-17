const newman = require('newman')
const fs = require('fs');
let ind = 0;

console.log(true)
/*
//Reading write
fs.readFile("iterator.json",function(err,data){
    console.log(data)
    if(err){
        writeFile(JSON.stringify({ind : ind}));
    }
    
    else if(data){
        //console.log(data.toString())
       run(JSON.parse(data.toString()));
    }
})

function run(iter){
console.log(iter.ind)
newman.run({
    collection: 'https://www.getpostman.com/collections/70b980097a824bd66226',
    reporters: 'cli',
    timeoutScript : 4000090,
    delayRequest : 1000,
    globalVar: [ 
        {"key" : "catIndex","value" : 
            iter.ind
        }
    ]
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
}).on('request',function(){
    
    console.log(Math.floor(process.memoryUsage().heapTotal / 1000000) + "MB");
}).on("done",function(err,data){
    console.log(data.messages)
    iter.ind += 1;
    iter.memoryUsage = Math.floor(process.memoryUsage().heapTotal / 1000000) + "MB";
    writeFile(JSON.stringify(iter));
    //res.end("1/100");

});
}

function writeFile(data){
    fs.writeFile('iterator.json',data,function(){
        process.exit();
    })
}


/*
 * Code to restart process found on github
 * Should be replaced after learning node processes
 *
process.on("exit", function () {
        require("child_process").spawn(process.argv.shift(), process.argv, {
            cwd: process.cwd(),
            detached : true,
            stdio: "inherit"
        });
    });*/