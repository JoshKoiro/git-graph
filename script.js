//Custom functions to improve API

function msg(message,tag){
  var message_Options = {}
  message_Options.author = "Josh Koiro <josh.koiro@gmail.com>"
  if(message !== undefined){
    message_Options.message = message
  }
  if(tag !== undefined){
    message_Options.tag = tag
  }
  return message_Options
}

gitGraph.master = gitGraph.branch("master")


//Creates new branch, takes a name and optional parent of the branch - defaults to master
var createBranch = (name,parent) => {
  if(parent !== undefined){
    gitGraph[parent].checkout()
  }
  gitGraph[name] = gitGraph.branch(name)
  return gitGraph
}

var commit = (branch,message,tag) => {
  if(gitGraph[branch] === undefined){
    createBranch(branch)
  }
  gitGraph[branch].commit(msg(message,tag))
}
//Merge function takes branch to merge to (defaults to master) and branch to merge from and optional custom message
var merge = (mergeFrom,mergeTo,tag,message) => {
  if(mergeTo === undefined){
    var mergeTo = 'master'
  }
  gitGraph[mergeTo].checkout()
  gitGraph[mergeFrom].merge(gitGraph[mergeTo],msg(message,tag));
}

/***********************
 * BRANCHS AND COMMITS *
 ***********************/

// Commit on HEAD Branch which is "master"
commit('master','initial commit')
commit('master','another commit')
createBranch('dev')
commit('dev','initial commit')
commit('dev','another commit')
createBranch('proj1','dev')
commit('proj1','initial commit')
commit('proj1','more commits')
merge('proj1','dev')
commit('dev','bux fixes for project 1')
merge('dev','master','v1.0')
