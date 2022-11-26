// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection({license}) {
  
  if (license === 'MIT' ){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if(license === 'GNU'){
     return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === 'Apache'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }else{
    return ""
  }
}
//renderLicenseSection({license})

// TODO: Create a function to generate markdown for README



function generateMarkdown(data) {
  return `# ${data.title}

  renderLicenseSection({license})
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg/${data.github})

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
  * My GitHub profile is [GitHub](https://github.com/${data.github})


  ## License

  **Note** This application is under the ${data.license} license.




`;
}

module.exports = generateMarkdown;
