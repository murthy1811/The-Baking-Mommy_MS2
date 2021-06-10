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

- index.js

    - One warning that semicolon is missing. No problem with running the file. Semicolon is added.
      undeclared variables with $ were found. I could not found a proper solution for this. Some sites suggested to use the proper version of jQuery 
      but since the site is working as I intend to, I did not fix this warning.

- order.js, prices.js

    - No major errors were found. Warnings were given that undeclared variables were found and suggested to use esversion 6 or esversion 8 in some cases. 
      site is running as intended and I could not fix this errors. In the future, I will check this to update.

- feedback.js

    - one warning of semicolon missing is fixed. Undefined variables could not be fixed. Unused variable found, but this funciton sendmail is used in html ( submit button) for 
      contact form.


## Testing User Stories from User Experience Section

 As an User, I want:
 
    1. Find information on the type of cakes available

        - users were welcomed to the website with carousel cake images, and immediately below, text is displayed "check out our assortment", which 
          should be enough to make user to scroll down a bit . Images were displayed to identify with the cakes, and buttons were provided with a click icon, and
          encouraging test is written on the button to make user to click. Upon, click, cake list is displayed

    2. Understand or read the other users experience with the cake

        - Immediately after cake assortment list, user reviews were given , to let the new user know about the taste of products and service of the organisation.
    
    3. Easily make an order for an interested cake

        - Navigation bar clearly shows a separate page to make an order. 
          Order page shows a form to the right, and on left, an options for user to select the cake. Buttons were consistent in all pages so as to make user familiar to click.
          Upon selection of cakes, Display text below changes with the options selected by the user. As well, the order form will be prefilled automatically, to help user.
          Clear text is written in the top of page for user to either select or write his own flaovour, and he will be reached to confirm. 
          Order form is basic to fill with the details to reach and deliver the cakes.

    4. Get confirmation once I make an order or give feedback

        - A sweet alert is given, once the order is submitted with a thank you and a confirmation message that the user will be contacted.
          order submit is not activated untill all the required information is filled by the user , so that the order is reached with all details. 
          Error message will be given in case the order form is not submitted properly due to internet issues or any other.
        
    5. Clear information on delivery areas and time.

        - Google maps API is called to show the user , locations where the cakes will be delivered, and the time is written clearly next to the maps.
          Delivery fee is mentioned for home deliveries. 


    6. Check out the social media of the organisation and can reach them through it

        - Footer section is designed and is given in all pages. Social media links were given through font awsome icons and will be opened in a new page.
           Contact number and email were given in case an user wants to reach the organisation.

    6. Associate with the organisation to make future purchases.

        - User is encouraged to make a subscription so that they can be reached via email with offers, recipes etc. User is asked to post their try-outs 
          in organisation instagram page. This is to keep relation with the user for all his future needs.

    7. Get the details of the prices.

        - Prices page gives the user all costs of the cakes with a simple details.

    8. Give proper feedback in different categories and overall experience.

        - feedback page is designed to guide the user. Submit button is disabled till the mandatory queries are answered. the queries were red in color before user gives input.
        they will be turned to green once the user make a selection. Radio buttons were given in order to make the user job easy. Text box is provided in case , user wants 
         to write feedback in detail, but not mandatory to fill , for the feedback submission. Form can be submitted with out this.
         Finally, user is provided with star rating, to give the satisfaction for the user to be in charge. Sweet alert confimation is given to the user after the submission
    
    
    