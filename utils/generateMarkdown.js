// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'No License'){
    return ''
  }

  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'No License'){
    return ''
  }

  return '* [License](#license)'
}


// TODO: Create a function that returns the license section of README
// Not sure if this function is needed or not as I am getting result through the function generateMarkdown
function renderLicenseSection(license) {

  if(license === 'No License'){
    return ''
  }
  
  return ` ## License

  Copyright (c) 2022 [GitHub](https://github.com/jaya4ever)\
  **Note** This application is under the [${license}](https://${license}-license.org)`
}
//renderLicenseSection({license})


// TODO: Create a function to generate markdown for README
// This function is working and generating a readme file
function generateMarkdown(data) {
  
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

   ## Usage
  ${data.usage}

${renderLicenseSection(data.license)}

  ## Contribution 
  ${data.contribution}

  ## Tests
  ${data.test}

 ## Questions
  Please reach out to me if you have any questions
  
  * My email id is ${data.email}
  * My GitHub profile is [${data.github}](https://github.com/${data.github})


 

`;
}

module.exports = generateMarkdown;
