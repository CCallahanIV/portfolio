/* Routing for single page web app*/

page('/', articleController.reveal);
page('/about', aboutController.reveal);
page('/repos', repoController.reveal);

page();
