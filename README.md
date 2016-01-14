Working as a freelance Front End Developer for Bond and Coyne (http://www.bondandcoyne.co.uk)

Creating a responsive webiste from designs provided by the company.

Using the twig PHP templating framework (http://twig.sensiolabs.org/)

To be handed over to their Back End Developer for integration into Craft CMS (http://craftcms.com)


**How to run this site:**

Dependencies
* composer
* npm
* bower

get the code
```bash
$git clone git@github.com:JenBerry/bondandcoynewebsite.git
$cd bondandcoynewebsite/
```
Install twig with composer
```bash
$composer install
```
Install foundation from foundation folder
```bash
$cd public/foundation/
$npm install
$bower install
```
compile sass
```bash
$npm start
```
run server from public folder
```bash
$cd ../
$php -S localhost:3000
```