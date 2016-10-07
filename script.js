/***********************
 *  CUSTOM TEMPLATES   *
 ***********************/

var myTemplateConfig = {
  colors: ["#F00", "#0F0", "#00F"], // branches colors, 1 per column
  branch: {
    lineWidth: 8,
    spacingX: 50
  },
  commit: {
    spacingY: -80,
    dot: {
      size: 12
    },
    message: {
      displayAuthor: true,
      displayBranch: false,
      displayHash: false,
      font: "normal 12pt Arial"
    },
    tooltipHTMLFormatter: function(commit) {
      return "<b>" + commit.sha1 + "</b>" + ": " + commit.message;
    }
  }
};
var myTemplate = new GitGraph.Template(myTemplateConfig);

/***********************
 *    INITIALIZATION   *
 ***********************/

var config = {
  template: "metro" // could be: "blackarrow" or "metro" or `myTemplate` (custom Template object)
    //, mode: "compact"     // special compact mode : hide messages & compact graph
};
var gitGraph = new GitGraph(config);

//COMMIT CONFIG

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

/***********************
 * BRANCHS AND COMMITS *
 ***********************/

// Create branch named "master"
var master = gitGraph.branch("master");

// Commit on HEAD Branch which is "master"
gitGraph.commit(message("Initial Commit"));
gitGraph.commit(message("Another Commit"));
