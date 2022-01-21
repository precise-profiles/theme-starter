const fs = require('fs');
const marked = require('marked');
const Handlebars = require('handlebars');

Handlebars.registerHelper('md', marked);

Handlebars.registerHelper('logo', function(text) {
  if (text === 'Github') {
    return 'fa-github-square';
  }
  if (text === 'Twitter') {
    return 'fa-twitter-square';
  }
  if (text === 'Linkedin') {
    return 'fa-linkedin-square';
  }
  if (text === 'Email') {
    return 'fa-envelope-square';
  }
  if (text === 'Blog') {
    return 'fa-rss';
  }
  if (text === 'Phone') {
    return 'fa-mobile';
  }
  if (text === 'Other') {
    return 'fa-info';
  }
  if (text === 'StackOverflow') {
    return 'fa-stack-overflow';
  }
});

Handlebars.registerHelper('truncate', function(str, len) {
  if (str && str.length > len) {
    return new Handlebars.SafeString(str.substring(0, len - 3).concat('...'));
  } else {
    return str;
  }
});


Handlebars.registerHelper('latestProjects', function(profile) {
  var experience, i, j, len1, len2, project, projects, ref, ref1;
  projects = [];
  ref = profile.experience;
  for (i = 0, len1 = ref.length; i < len1; i++) {
    experience = ref[i];
    if (experience.projects) {
      ref1 = experience.projects;
      for (j = 0, len2 = ref1.length; j < len2; j++) {
        project = ref1[j];
        projects.push(project);
      }
    }
  }
  return projects.slice(0, 8);
});

Handlebars.registerHelper('showTracks', function(portfolio) {
  return portfolio.tracks && portfolio.tracks.visible
});

const renderProfile = function(profile) {
  return render('profile', profile);
};

const renderPortfolio = function(portfolio) {
  return render('portfolio', portfolio);
};

const render = function(name, model) {
  const css = fs.readFileSync(__dirname + "/" + "styles." + name + ".css", 'utf-8')
  const template = fs.readFileSync(__dirname + "/" + name + ".template.html", 'utf-8');

  options = {
    css: css
  };
  options[name] = model;
  return Handlebars.compile(template)(options);
};

module.exports = {
  renderProfile: renderProfile,
  renderPortfolio: renderPortfolio,
};
