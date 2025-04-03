API Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other. 
Axios is HTTP client that is promise based for javascript. It is mostly used for API requests because:
- It is compatible with browser and node.js
- Supports promise API
- Transform  and intercept request and response data
- Supports multiple request methods: Axios supports a wide range of HTTP request methods (GET, POST, PUT, DELETE, etc.) with simple API.
- Automatic JSON transformation: Axios automatically transforms the response data into JSON format, making it easier to work with APIs that return JSON data.


Why is it useful to create a reusable Axios instance?
- It centralises configuration, making it easier to maintain and apply consistent settings like base URL, headers, timeouts, and interceptors across all API requests. It reduces code duplication, simplifies maintenance, and makes the code more scalable.

How does intercepting requests help with authentication?
- Interceptors allow you to automatically add authentication tokens to each API request without needing to manually attach it every time. This ensures that all requests are authenticated consistently, improving security and reducing manual errors.

What happens if an API request times out, and how can you handle it?
- If an API request times out, the request is aborted, and an error is thrown. This can be handled by catching the error, displaying a timeout message to the user, and possibly retrying the request or offering alternative actions like canceling or retrying.