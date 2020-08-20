# anagram finding project
# clone project to download it
  cd projects/
  
  git clone ...
  
# make Composer install dependencies
  cd my-project/
  
  composer install
  
# You’ll probably also need to customize your .env file and do a few other project-specific tasks (e.g. creating a database). 
php bin/console doctrine:database:create

php bin/console make:migration

php bin/console doctrine:migrations:migrate

# Install packages for React
npm install # or yarn install if you use yarn

# Run project
On first terminal:

symfony server:start

On second terminal:

encore dev --watch

# A little bit about project

For finding anagram i used very simple and lightalgorithm.
  - Both words have same length
  - Both words have same character count
  
For testing i tried to write some tests using PHPUnit.
