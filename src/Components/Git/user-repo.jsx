import React from "react";
import RepoMenu from './repo-menu';
import Fetch from '../comp-fetch';

function UserRepositories({
   login,
   selectedRepo,
   onSelect = f => f,
}) {
   return ( 
      <Fetch 
         uri = {`https://api.github.com/users/${login}/repos`}
         renderSuccess = {({data}) => ( 
            <RepoMenu 
               repositories = {[data]}
               // selectedRepo = {selectedRepo}
               onSelect = {onSelect}
            />
         )}
      /> 
      );
}

export default UserRepositories;