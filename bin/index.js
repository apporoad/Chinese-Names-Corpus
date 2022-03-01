var fs = require('fs')
var path = require('path')
const parser = require('lisa.csv.parser.js')
var utils = require('lisa.utils')

var nameText = fs.readFileSync( path.join(path.dirname(__dirname),'English_Names_Corpus/English_Cn_Name_Corpus_Gender（48W）.txt' ),'utf-8')

var allFemales = []
var allMales = []

nameText.split('\r').forEach(element => {
    
    var splits = element.split('|')
    if(splits[2] == 'F'){
        allFemales.push({ name : utils.startTrim(splits[0] ,['\n', '\\n']) , enName : utils.startTrim(splits[1] ,['\n', '\\n']) })
    }else{
        allMales.push({ name : utils.startTrim(splits[0] ,['\n', '\\n']), enName : utils.startTrim(splits[1] ,['\n', '\\n']) })
    }
});



var yourGender = allMales
var count = 5000

var chooseCount = Math.floor(yourGender.length / count)

var target = []

for(var i=0;i<count;i++){
    var index = Math.floor(Math.random()* chooseCount) + i * chooseCount
    var one = yourGender[index]
    if(!one){
        console.log('null @' + index)
    }
    target.push(yourGender[index])
}

fs.writeFileSync('name.json' , JSON.stringify(target))