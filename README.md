# Calvin Edwards - Sentry Health Survey App
> Utilizing a very simple webapp to demonstrate gcp knowledge and CI/CD infrastructure

# Improvements to be Added

  - Arbitrary image/tag name 'web:latest' instead of symbolic links to project build for the repository image in the codebuild.yml file
  - Mocha npm test framework isn't the best representation of a stateless application as it uses the requests library to simulate HTTP requests and is more akin to an end-to-end test; Stateless functionality test suite would have been better
  - Testing npm package was installed to easily script the tests to be performed on the 'npm run start' local testing live testing is done with npm test; CI testing is done with the 'npm run ci' command -- see package.json
  - CI testing should also include command options to quiet the node output to ensure terminal readability of passing/failing tests
  - docker-compose.yml is currently just for the development of the application; Additional forwarding of nodemon output to docker terminal is not yet implemented
