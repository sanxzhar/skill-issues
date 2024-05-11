#!/usr/bin/env node

import figlet from "figlet"
import gradient from "gradient-string"
import { spawn } from "child_process"

const args = process.argv.slice(2);
const npmProcess = spawn('npm', args, {
    stdio: 'inherit'
  });
  
  npmProcess.on('error', (error) => {
    console.error(error);
  });
  
  npmProcess.on('exit', (code) => {
    if (code !== 0) {
        console.log('\n\n\nSkill-issues | SIS is a npm wrapper.')
        figlet('skill  issues', (err, data) => {
            console.log(gradient.pastel.multiline(data))
        })
    }
  });
  


