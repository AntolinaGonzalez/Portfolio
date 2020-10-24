export default (req, res) => {
  let option = req.query.option;
  let sinspace = option.trim();
  option = "";
  for (let i = 0; i < sinspace.length; i++) {
    if (sinspace[i] != " ") {
      option = option + sinspace[i];
    }
  }
  option = option.toLowerCase();
  if (option == "ls") {
    res.redirect(`/ls`);
  }
  if (option == "cdcontact") {
    res.redirect(`/contact`);
  }
  if (option == "cd..") {
    res.redirect(`/`);
  }
  if (option == "cdeducation") {
    res.redirect(`/education`);
  }
  if (option == "cdexperience") {
    res.redirect(`/experience`);
  }
  if (option == "cdprojects") {
    res.redirect(`/projects`);
  }
  res.redirect(`/error?cd=${option}`);
};
