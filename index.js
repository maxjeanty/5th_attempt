
const generateMarkDown = require("./utils/generateMarkDown");
const inquirer = require("inquirer");
const fs = require("fs");




// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Name This App"

    },

    {
        type: "input",
        name: "description",
        message: "Describe This Project!"

    },
    {
        type: "input",
        name: "installation",
        message: "How to Install"


    },

    {
        type: "list",
        name: "license",
        message: "What Type of License is on this Application?",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU GPL v3.0"
        ]
    },
    {
        type: "input",
        name: "usage",
        message: "What is the project usage?",
    },
    {
        type: "input",
        name: "contributions",
        message: "What are the the guidelines?",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide the project tests",
    },
    {
        type: "input",
        name: "gitHubUser",
        message: "What is your GitHub handle?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
   
    
];

// function used to determine what license was chosen and will later be used in init function to display badge image through generateMarkdown.
const createBadge= (license) => {
    if(license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
    else if (license === "Apache 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
    else if (license === "GNU GPL v3.0") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        
    }

    
}

const badgeInfo = (license) => {

    if(license === "MIT") {
        return `MIT License
        Copyright (c) [year] [fullname]
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the 'Software'), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`;
    }
    else if (license === "Apache 2.0") {
        return ` Copyright [yyyy] [name of copyright owner]
        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
     
http://www.apache.org/licenses/LICENSE-2.0
     
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;
    }
    else if (license === "GNU GPL v3.0") {
        return `Copyright (C) <year>  <name of author>
        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
        
    }
}


   

inquirer
    .prompt(questions)
    .then(res => {

        res.badge = createBadge(res.license)
        res.badgeText = badgeInfo(res.license)
        

        fs.writeFile("README.md", generateMarkDown(res), (err) => {
            if (err) throw err
        })

    })
