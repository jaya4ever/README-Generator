
// TODO: Create a function that returns the license section of README
// Not sure if this function is needed or not as I am getting result through the function generateMarkdown
function renderLicenseSection({ license }) {

  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === 'GNU') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else {
    return ""
  }
  
}
//renderLicenseSection({license})


// TODO: Create a function to generate markdown for README
// This function is working and generating a readme file
function generateMarkdown(data) {
  
  return `# ${data.title}
  
 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Description
  ${data.description}

  
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  

  ## Installation
  ${data.installation}

   ## Usage
  ${data.usage}

  ## Contribution 
  ${data.contribution}

  ## Tests
  ${data.test}

 ## Questions
  Please reach out to me if you have any questions
  
  * My email id is ${data.email}
  * My GitHub profile is [Jaya4ever](https://github.com/${data.github})


  ## License
  Copyright (c) 2022 [GitHub](https://github.com/jaya4ever)\
  **Note** This application is under the [${data.license}](https://mit-license.org)

`;
}

module.exports = generateMarkdown;
