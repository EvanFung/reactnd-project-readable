# React & Redux - Readable Project

## About

This is second project from React Developer Nanodegree in [Udacity](https://www.udacity.com/): In ***Readable*** project, you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

## Installation and deployment

### Pre-requisites

Before being able to run this application, you must have [Node Package Manager](https://nodejs.org/en/)  or [Yarn](https://yarnpkg.com/) installed on your computer.

####Get the app running

This repository has both server and client side code for the application, so you will need to run both of them to make it work.



#### Start the server

Some useful tips to help you get started:

1. Clone the repository to your computer( run on terminal )

2. ```
   git clone https://github.com/EvanFung/reactnd-project-readable.git
   ```

3. ```
   #Move to server directory
   cd server
   ```

4. ```
   npm install
   ```

5. ```npm start```

#### Start the client

1. ```
   #Move to client directory
   cd ../client
   ```

2. ```npm install```

3. ```npm start```

### Folder Structure

The project folder structure of client side is as follows:

  '    |-- config-overrides.js',
  '    |-- package-lock.json',
  '    |-- package.json',
  '    |-- README.md',
  '    |-- public',
  '    |   |-- favicon.ico',
  '    |   |-- index.html',
  '    |   |-- manifest.json',
  '    |-- src',
  '        |-- index.js',
  '        |-- registerServiceWorker.js',
  '        |-- main',
  '        |   |-- App.js',
  '        |   |-- actions',
  '        |   |   |-- category.js',
  '        |   |   |-- comment.js',
  '        |   |   |-- post.js',
  '        |   |-- components',
  '        |   |   |-- assets',
  '        |   |   |   |-- LoadingProgress.js',
  '        |   |   |-- header',
  '        |   |   |   |-- HeaderBar.js',
  '        |   |   |-- menu',
  '        |   |   |   |-- TabContainer.js',
  '        |   |   |   |-- Tooltips.js',
  '        |   |   |-- pages',
  '        |   |   |   |-- AllPostsPage.js',
  '        |   |   |   |-- NotFoundPage.js',
  '        |   |   |   |-- PostDetailsPage.js',
  '        |   |   |-- posts',
  '        |   |       |-- body',
  '        |   |       |   |-- CommentBox.js',
  '        |   |       |   |-- PostContent.js',
  '        |   |       |-- button',
  '        |   |       |   |-- CommentButton.js',
  '        |   |       |   |-- UpDownVoter.js',
  '        |   |       |-- create',
  '        |   |       |   |-- NewComment.js',
  '        |   |       |   |-- NewPost.js',
  '        |   |       |-- list',
  '        |   |           |-- PostCardItem.js',
  '        |   |           |-- PostListContainer.js',
  '        |   |-- reducers',
  '        |   |   |-- category.js',
  '        |   |   |-- comment.js',
  '        |   |   |-- index.js',
  '        |   |   |-- post.js',
  '        |   |-- store',
  '        |   |   |-- configureStore.js',
  '        |   |-- styles',
  '        |   |   |-- assets',
  '        |   |   |   |-- LoadingProgress.js',
  '        |   |   |-- header',
  '        |   |   |   |-- HeaderBar.js',
  '        |   |   |-- menu',
  '        |   |   |   |-- TabContainer.js',
  '        |   |   |   |-- Tooltips.js',
  '        |   |   |-- pages',
  '        |   |   |   |-- MainRouterLayoutPage.js',
  '        |   |   |   |-- NotFoundPage.js',
  '        |   |   |   |-- PostDetailsPage.js',
  '        |   |   |-- post',
  '        |   |       |-- PostCardItem.js',
  '        |   |       |-- PostListContainer.js',
  '        |   |       |-- body',
  '        |   |       |   |-- CommentBox.js',
  '        |   |       |   |-- PostContent.js',
  '        |   |       |-- button',
  '        |   |       |   |-- CommentButton.js',
  '        |   |       |   |-- PostSaveCancelButton.js',
  '        |   |       |   |-- UpDownVoter.js',
  '        |   |       |-- create',
  '        |   |           |-- NewComment.js',
  '        |   |           |-- NewPost.js',
  '        |   |-- utils',
  '        |       |-- ActionHelper.js',
  '        |       |-- PostsAPI.js',
  '        |       |-- Utils.js',
  '        |-- res',
  '        |   |-- images',
  '        |   |   |-- ok-128.jpg',
  '        |   |-- styles',
  '        |       |-- App.css',
  '        |       |-- index.css',
  '        |-- test',
  '            |-- App.test.js',