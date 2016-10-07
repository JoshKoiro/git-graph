//Custom functions to improve API

function message(message){
  var commitConfig = {
  // dotColor: "white",
  // dotSize: 10,
  // dotStrokeWidth: 10,
  // messageHashDisplay: false,
  // messageAuthorDisplay: true,
  message: message,
  author: "Josh Koiro <josh.koiro@gmail.com>"
  };
  return commitConfig
}

var repo = {
  master: gitGraph.branch("master")
}

var createBranch = (name,parent) => {
  if(parent !== undefined){
    repo[parent].checkout()
  }
  repo[name] = gitGraph.branch(name)
  return repo
}

var commit = (branch,msg) => {
  if(repo[branch] === undefined){
    createBranch(branch)
  }
  repo[branch].commit(message(msg))
}

var merge = (mergeTo,mergeFrom) => {
  repo[mergeTo].checkout()
  repo[mergeFrom].merge()
}

/***********************
 * BRANCHS AND COMMITS *
 ***********************/

// Commit on HEAD Branch which is "master"
commit('master','initial commit')
commit('master','another commit')
