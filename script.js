// Function to handle Google Sign In
function signInWithGoogle() {
    // Implement Google Sign In logic here
    console.log('Signing in with Google...');
  }
  
  // Function to add item to list
  function addItemToList(inputId, listId) {
    const input = document.getElementById(inputId);
    const value = input.value.trim();
    if (value !== '') {
      const list = document.getElementById(listId);
      const li = document.createElement('li');
      li.textContent = value;
      list.appendChild(li);
      input.value = '';
    }
  }
  
  // Event listeners
  document.getElementById('sign-in-button').addEventListener('click', signInWithGoogle);
  
  document.getElementById('personal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addItemToList('personal-input', 'personal-list');
  });
  
  document.getElementById('shared-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addItemToList('shared-input', 'shared-list');
  });
// Function to handle copying lists to clipboard
function copyListsToClipboard() {
    const personalList = document.getElementById('personal-list').innerText;
    const sharedList = document.getElementById('shared-list').innerText;
    
    const combinedLists = `Personal Checklist:\n${personalList}\n\nShared Checklist:\n${sharedList}`;
    
    // Create a temporary textarea element to hold the combined lists content
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = combinedLists;
    
    // Append the textarea to the document body
    document.body.appendChild(tempTextArea);
    
    // Select the text within the textarea
    tempTextArea.select();
    
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
    
    // Provide feedback to the user
    alert('Lists copied to clipboard!');
  }
  
  // Event listener for Share button
  document.getElementById('share-button').addEventListener('click', copyListsToClipboard);
    
  
  // Function to initialize Google Sign-In
function initGoogleSignIn() {
    gapi.load('auth2', function() {
      const auth2 = gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Replace with your client ID
      });
  
      // Attach click event listener to sign-in button
      const signInButton = document.getElementById('sign-in-button');
      auth2.attachClickHandler(signInButton, {}, onSuccess, onFailure);
    });
  }
  
  // Callback function for successful sign-in
  function onSuccess(googleUser) {
    console.log('Signed in as: ' + googleUser.getBasicProfile().getName());
    // You can add further logic here, like redirecting to another page or displaying user information.
  }
  
  // Callback function for failed sign-in
  function onFailure(error) {
    console.error('Sign-in failed:', error);
  }
  
  // Call initGoogleSignIn() to initialize Google Sign-In
  initGoogleSignIn();
  