import {readFile, writeFile } from 'node:fs/promises'

import fetch from 'node-fetch'

const INPUT_FILE_NAME = './movie-file.json'
const OUTPUT_FILE_NAME = './Output.json'
const URL = 'https://imdb-api.com/en/API/Title/k_nghz2knb/'

let omg = {
        "total-duration": 0,
        "movies": []
    }

function processResult(obj) {
    let ret = {
    }
    ret.id = obj.id
    ret.title = obj.title
    ret.duration = obj.runtimeMins

    omg['total-duration'] += parseInt(ret.duration)
    omg.movies.push(ret)
    writeFile(OUTPUT_FILE_NAME, JSON.stringify(omg))
}

function processFileContent(fileContents) {
    let objContent = JSON.parse(fileContents)['movie-ids']
    let urlArray = objContent.map(element => URL + element)
    urlArray.map(index => fetch(index).then(response => response.json()).then(out => processResult(out)))
}

readFile(INPUT_FILE_NAME)
.then(processFileContent) 






/**
 * fetch(url)
.then(res => res.json())
.then(out =>
  console.log('Checkout this JSON! ', out))
.catch(err => { throw err });
 */