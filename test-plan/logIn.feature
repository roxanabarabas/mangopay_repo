Feature: Login Functionality 
Background: 
Given opens in a new window a website
And follows the sign in process

Scenario: Login with valid credentials
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com |
| Password | SomethingToRemember123 |
And presses enter button
Then the user is logged in

Scenario: Login with invalid credentials email validation 
When the user navigates to the login page
And enters the following data
| Email | testing.maps@nothing |
Then an error message is displayed
And user is not able to proceed to the password field

Scenario: Login with invalid credentials email validation upper Letter
When the user navigates to the login page
And enters the following data
| Email | Testing.maps@email.com |
Then the user should be able to proceed to the next step
And checks that email field is case-insensitive

Scenario: Login with invalid credentials password validation
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com  |
| Password | SomethingToRemember123 |
Then an error message is displayed saying the criteria is not met
And user is not able to sign in

Scenario: Login with invalid credentials password validation
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com  |
| Password | SomethingToRemember123333333333333333333333 |
Then an error message is displayed saying that the password criteria is not met
And user is not able to sign in

Scenario: Login with invalid credentials password validation
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com  |
| Password | nothing |
Then an error message is displayed saying that the password criteria is not met
And user is not able to sign in

Scenario: Login with invalid credentials password validation
When the user goes to the DataBase
And checks if the email exists in the DB
Then the user validates that the email exists

Scenario: Test Security limit the total number of unssuccessfull attempts to log in
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com  |
| Password | nothing |
Then an error message is displayed saying that the password criteria is not met
And user tries again to login
And then a message is displayed sayingd that the total number of unssuccessfull login attempts are reached

Scenario: Test Security generic error message for incorrect user/password
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com  |
| Password | nothing |
Then a generic error message is displayed
And the user doesn't know if the email or password are incorrect


Scenario: Security: Check if captcha is displayed
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com  |
| Password | SomethingToRemember123 |
Then a checkbox is displayed under the password field
And the user can validate capcha avoiding bots to sign in

Scenario: Security: User can login simultaneously in different browsers
When the user enters the login page on Chrome
And enters the following data
| Email | testing.maps@email.com  |
| Password | SomethingToRemember123 |
And opens another browser Edge
And writes the same thing
Then the user should be successfully logged in on both browsers

Scenario: Security: User cannot login at the same time in the same browser
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com  |
| Password | SomethingToRemember123 |
And opens another tab
And writes the same thing
Then the user should be promted with a message that the flow continued in another tab

Scenario: Check if 'Remember me' checkbox is visible
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com  |
| Password | SomethingToRemember123 |
Then a checkbox is displayed with the text: 'Rememember me'
And the user can mark the checkbox to true/false

Scenario: Verify 'forgot your password' button
When the user enters the login page
And clicks on 'Forgot your password' button
Then the user is taken to another page 
And the user can reset the password

Scenario: Verify that the user can log in after resetting/changing the password
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com |
| Password | SomethingToRemember123456 |
And presses enter button
Then the user is logged in successfully 


Scenario: Verify that the user can delete the entered data by pressing an 'x' button
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com |
| Password | SomethingToRemember123456 |
And presses the 'x' button from each field
Then the user can erase the entered data

Scenario: Verify the loading time of the page, max 10s
When the user enters the login page
And enters the following data
| Email | testing.maps@email.com |
| Password | SomethingToRemember123456 |
And presses the 'Ok' button
Then the user is signned in successfully if the time doesn't exceed 10s

Scenario: Verify that the user can access the sign in page from different browsers
When the user enters the login page from Chrome
And enters the following data
| Email | testing.maps@email.com |
| Password | SomethingToRemember123456 |
And presses the 'Ok' button
Then the user is signned in successfully


