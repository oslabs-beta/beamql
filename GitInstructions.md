GIT INSTRUCTIONS, Mark Liu 31.7.21

  Please refer to these directions for work on this project. From commit down, you'll repeat these - a LOT. Practice makes slightly less frantic & confused!
  In order to facilitate better workflow, please follow the steps below!



DIVING IN

  If you have NOT cloned before, run the following:
  
    git clone git@github.com:codesmith27/yeti-crab.git
      *assumes you are running SSH, HIGHLY recommend looking into setting this up
      else:
    git clone https://github.com/codesmith27/yeti-crab.git
    git branch -a
      *you should see remotes/origin/dev
    git checkout dev
    npm ci
      this step is INSTEAD OF npm install. Only use npm install for specific packages you wish to add.

  Please NEVER work on the main branch. This may cause very significant issues in the long run.



GUTEN MORGEN, OHNE SORGEN

  Upon starting work for the day, please run the following:
    
    git checkout dev
    git pull origin dev
    


COMMITMENT CAN BE CRUCIAL (it really is so please do it)

  Please commit early and OFTEN. Basically, AT LEAST every hour or whenever anything framework is set into the file or completed. Look here for the ridiculous amount of commits I made tonight working on ONE text document, but this is fine! https://github.com/codesmith27/yeti-crab/commits/dev
  Run the following:

    git status
    git add file1 file2 file3 file4 file_so_on
      ONLY commit the files YOU HAVE CHANGED. I have included .gitignore and package-lock.json into the repo as a way to sync dependencies within the team. Please do NOT add node_modules directory.
    git commit -m '[your message here]'


OH HAPPY DAY!

  When you or your team has built something that works, commit as described above, then run the following:
  
    git pull origin dev
    git push origin dev
  

SHARE THE LOVE

  Now, message the team for everyone to run the same commands. This will ensure the team is working as closely as possible on a matching codebase.

  Please message the team for everyone to add, commit, pull, push if you:
  
    - install any sort of dependency/devdependency (git install)
    - change ANYTHING in webpack or package.json
    - reach any milestone, minor or major, in your code (functionality)

  If you are running npm install/npm i as a way to download all of the npm packages, 
  As the scope of this project is relatively simple, we won't get into stashing or multiple branches for the time being.


Please run these steps independently precisely following the order above.
If merge issues occur(they will, but no worries!), review them in your editor before moving on.
The nuclear option which will always work, and most seniors have resorted to throughout their time at Codesmith (as well as people in the industry), is to copy your code into separate backup files, delete the ENTIRE FOLDER (it's on GitHub, don't worry!), clone the repo again, paste in your code, and go from the Commit section above.

Please use your computer terminal NOT IN VS CODE, especially if debugging!


If there are any issues, message me individually and we can jump into a Zoom room together!

~Mark Liu, 31.7.21

