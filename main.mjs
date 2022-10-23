const INPUT_FILE_NAME = './movie-file.json'
const OUTPUT_FILE_NAME = './Output.json'

import {readFile, writeFile } from 'node:fs/promises'

import fetch from 'node-fetch'


writeFile(OUTPUT_FILE_NAME, "lol")