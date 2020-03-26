# ErrorHunter for javascript

## Realtime error tracking for live apps

## Installation
##### before installing make sure you have an account here! [errorhunter](https://errorhunter.herokuapp.com)
###### Add this line to your application's Gemfile:

```
  yarn add error_hunter || npm i error_hunter
```

## Setup

##### The api is simple

###### In your ```config/development``` or ``` config/production``` stage of your app the token and app name.
###### Your token and app_name is in the dashboard on https://errorhunter.herokuapp.com

```javascript 1.8
import ErrorHunter from "error_hunter"
ErrorHunter.config('fixflex',' VrZYnbqXpJVVYdN8gEaizAd3')
export default ErrorHunter
```
## Usage
Logging an error is as simple as the code below.

 ```javascript 1.8
import ErrorHunter from "from your where you setup the config file"
ErrorHunter.add_error('TestAppError', 
'Some error took place', 
'An Exception was thrown',
'file.js/has error',
 'urgent')
```
You can now monitor errors in realtime in your dashboard at https://errorhunter.herokuapp.com/

## Development

After checking out the repo, run `npm install or yarn install` to install dependencies


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/ispirett/error_hunter. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/[USERNAME]/error_hunter/blob/master/CODE_OF_CONDUCT.md).


## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the ErrorHunter project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/ispirett/error_hunter_npm/blob/master/CODE_OF_CONDUCT.md).
