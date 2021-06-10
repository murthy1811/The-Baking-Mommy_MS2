# Testing

## Table of Contents

1. [**Testing Overview**](#testing-overview)
2. [**Validation**](#validation)
    - [**W3C Markup Validator results**](#w3c-markup-validator-results)
    - [**W3C CSS Validator results**](#w3c-css-validator-results)
    - [**JSHint Validation results**](#jshint-validation-results)
3. [**Testing User Stories from User Experience Section**](#testing-user-stories-from-user-experience-section)
4. [**Manual Testing on Live Site**](#manual-testing-on-live-site)
5. [**Bugs Discovered**](#bugs-discovered)

## Testing Overview

- The website was tested on Google Chrome, Mozilla Firefox, Opera, Safari and Microsoft Edge browsers.

- Using Chrome developer tools the responsive nature of the site was tested on the Moto G4, Galaxy S5, iPhone5/SE, iPhone 6/7/8, iPad, iPad Pro and Surface Duo.

- The website was tested on real-life devices, namely a 14" Windows laptop, an Galaxy Android Phone and an iPhone SE.

## Validation

- The [W3C Markup Validator](https://validator.w3.org/#validate_by_input) service was used to validate the HTML code of the project.
  
- The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) service was used to validate the CSS code. No errors were found.

- [JSHint](https://jshint.com/) was used to validate the JavaScript code of the project.

### W3C Markup Validator results

- index.html

    - Two minor errors were found. Alt attribute is missed in images for user stories. This is added. One warning is found, which is article tag is missing the heading. I removed the article
      tag which I thought is unneccesary in the first place.

- order.html

    - A minor error is found for selection images, height and width are added in html with px. This is removed after check. Minor warnings were fixed.

- prices.html

    - Minor Error- section tag is not closed . This is fixed now.

- feedback.html

    - Minor Error- extra form closing tag is found . This is fixed now.

### W3C CSS Validator results 

- The CSS passed with no errors.

### JSHint Validation results

- Testing game.js

    - No major errors were found. Four warnings were produced, two were very minor and involved two missing semicolons which did not affect the running of 
    the program. The other two warnings stated that functions declared within loops referencing an outer scoped variable may lead to confusing semantics. 
    This referred to the variable activeColor and does not affect the running of the program. The functions could be refactored in subsequent updates.

- Testing utils.js

    - No major errors were found. Three warnings were produced, a semicolon was missing which was added and did not affect the running of the program. The 
    other two warnings stated that there was two undefined variables namely anime and emailjs. These were then declared inside the script to remove this warning. 
    The sendMail variable was declared as unused. This function is called in the form element of the index.html file.