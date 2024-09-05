// Create a new script element
const mailchimpScript = document.createElement('script');

// Set the script's id and source as per the Mailchimp embed code
mailchimpScript.id = 'mcjs';
mailchimpScript.src = "https://chimpstatic.com/mcjs-connected/js/users/1377935e520ff3adffed7e40e/3ca05b7f6cd132bd314369264.js";

// Set it to load asynchronously
mailchimpScript.async = true;

// Insert the script before the first script tag in the document
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(mailchimpScript, firstScriptTag);
