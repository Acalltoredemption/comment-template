import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="Hello!" avatarImage={faker.image.avatar()} />
      <CommentDetail author="Alex" timeAgo="Today at 1:44PM" commentText="How are you doing?" avatarImage={faker.image.avatar()} />
      <CommentDetail author="Jane" timeAgo="Yesterday at 1:15AM" commentText="This is the best ever" avatarImage={faker.image.avatar()} />
      <CommentDetail author="Bob" timeAgo="3 Days Ago" commentText="Yeah I can feel it" avatarImage={faker.image.avatar()} />
      <CommentDetail author="Steve" timeAgo="Two Weeks Ago" commentText="Alright!" avatarImage={faker.image.avatar()} />
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));