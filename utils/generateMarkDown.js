// function to generate markdown for README
function generateMarkDown(data) {
    return `# ${data.title}

${data.badge}



## Table of Content
[Description](#description)
[Installation](#installation)
[License](#license)
[Usage](#usage)
[Contribution](#contributions)
[Test instructions](#test)
[Question](#questions)



## Description

${data.description}

## Installation

${data.installation} 


## License: 

${data.badgeText}


## Usage info: 

${data.usage}

## Contributions: 

${data.contributions}

## Test instructions:  

${data.tests}








## Questions:

[My GitHub Profile](https://github.com/${data.gitHubUser})

contact me at: ${data.email}

  `
  }
  
  module.exports = generateMarkDown;
  