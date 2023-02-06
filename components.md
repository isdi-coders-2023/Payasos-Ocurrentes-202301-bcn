# DATA

## DATA LAYER

- List of characters (public API)

  - image
  - name
  - status
  - species
  - gender
  - origin
  - location

- List of characters (private API)

- isLoading (boolean)
- Error 404

## DATA MODIFICATIONS

- Create new character to favourites
- Modify a character from favourites
- Delete a character from favourites
- set isLoading
- unset isLoading

# COMPONENTS

## CONTEXT PROVIDER (STORE)

- Contains the list of characters (public API)
- Contains the list of favourite characters (private API)

- Contains the function to add to favourites
- Contains the function to remove from favourites
- Contains the function to create a character
- Contains the function to modify a character

## UI CONTEXT PROVIDER (STORE)

- Contains isLoading
- Contains Error 404

- Contains set isLoading function
- Contains unset isLoading function
- Contains the activate error function
- Contains the deactivate error function

## APP

## NAVIGATION

- Shows the navigation pages
- Receives the action from user to go to a page

## CHARACTER LIST

- Shows the list of characters
- Sends a character to Character

## CHARACTER

- Receives a character
- Shows a character

## SEARCH BAR

- Receives a function to send a request to public API
- Receives the action from user to search a character

## BUTTON

- Receives a function to request next/previous characters
- Receives the action from user to go to next/previous page

## FAV BUTTON

- Receives the function to add to favourites
- Receives the function to remove from favourites
- Receives the action from user to add/remove from favourites

## FORM

- Receives the function to create a character
- Receives the function to modify a character

## LAYOUT

- Shows the navigation bar

## HOME PAGE

- Shows the list of characters (public API)

## FAV PAGE

- Shows the list of favourite characters (private API)

## DETAIL PAGE

- Shows the character detail

## LOADING PAGE

- Shows the loader depending on isLoading

## ERROR PAGE

- Shows the error when there is an error
