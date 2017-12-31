# Main Topics :
1. Source Code Management 

Important for ...
* Saving Code 
* Sharing Code 
* Supervising Changes of yours and others code
* Submitting Changes to your project

## Git

**Benefits**

* Maintains a long term change history of every file
* Branching and merging
* Traceability
* Popular, Widely-used
* Integrations with other softwares like JIRA

Designed with performance,security and flexibility in mind   
[Git Tutorial](https://www.atlassian.com/git/tutorials/what-is-git)

**Common Implementations**

* Atlassian Stash
* Atlassian BitBucket
* Altassian SourceTree
* Gitlab
* GitHub

## Git Flow
A branching model for git, created by Vincent Driessen. Well suited for collaboration and scaling development teams.

**Repositories**
* Origin/Remote - Remote server, whitch hosts the project repository
* Local - the local version of the repository on your machine

**Branches**  
* Master - Holds Production ready code and should be tagged as a version
    * Hotfix - contains fixes specifically targeted for production. Interacts with Master. Not a seperate branch
* Develop - Actively updated branch, that bugfixes and new featureds are merged into
    * Feature - Contains a new feature (think features user story), Labled feature/[branchname]
    * Bugfix - Contains fixes to features (think fixes tickets in the sprint), Labeled bugfix/[branchname]

** Pull Requests** 

Pulling changes from one branch to another. 


## Useful terms and commands
1. git status:
2. git add: Add changes to the stanging area 
3. git commit:
4. git fetch: 
5. git  

## Best Practices
* Always include descriptive comments on commits
* Branch/commit/push/pull early and often
* Test thoroughly, and commit working code only
* One feature or fix per branch
* Never work directly on the develop or master branch
* Keep pull request small

---
## Resources
**Git**
* (ohshitgit.com)[https://www.ohshitgit.com/]
* (Git Guide)[https://rogerdudler.github.io/git-guide/]
* (Github Challanges)[https://]
