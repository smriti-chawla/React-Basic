import React from 'react';

export const TweetsList = ({tweets}) => {
 return (
   <ul>
   {
     tweets.map((tweet, idx) => <li key={idx}>{tweet}</li>)
   }
   </ul>
 )
}