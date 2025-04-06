# Axios

1. Why is it useful to create a reusable Axios instance?
Creating a reusable Axios instance is like setting up a custom tool that can be used anywhere in your app. Instead of writing the same configurations (like base URL, headers, and timeouts) over and over again for every request, you can just create the instance once and reuse it. This saves you a lot of time and keeps your code cleaner. It’s like setting up a bike with the right gear and tyres once, then just hopping on and riding whenever you need to get somewhere!

2. How does intercepting requests help with authentication?
Intercepting requests is like setting up a checkpoint before your requests leave your app to go to the server. You can use this checkpoint to add things like authentication tokens to your requests. If your app needs a login session (like when you sign in), an auth token is saved in your browser’s storage. When you make an API request, the interceptor grabs that token and attaches it to the request automatically. It's like showing your ID at the door before entering a party – it helps prove you’re allowed in!

3. What happens if an API request times out, and how can you handle it?
If an API request times out, it means the server didn’t respond within a certain amount of time (like when you're waiting too long for a pizza delivery). You can set a timeout limit, so if the server takes longer than that, your app will stop waiting and show an error. Handling it involves showing a message to the user, like “Sorry, the request took too long. Please try again later.” This way, users aren't left hanging, and they know something went wrong.
