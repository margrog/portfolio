
##Get the project code:
###Beginners:
- Install the [GitHub Desktop app for Mac or Windows](https://desktop.github.com/).
- Enter your account github account credentials in the above application.
- Clone the GIT repo for this project by pressing `+` in the toolbar, top-left, choose clone and enter `https://github.com/margrog/portfolio.git`.
- Choose an easy location where to put the project code.

###Experts:
- Ask Margien to add you as a ‘collaborator’ in the GitHub’s repo settings.
- Clone the project [repo](https://github.com/margrog/portfolio.git) on you machine.

##Build the project
- Make sure [NodeJS](https://nodejs.org/) is installed on your computer.
- Open the Terminal (is a default application on any Mac).
- In the Terminal, go to the project folder. (On a Mac you can drag the project folder on the Terminal icon in the ‘Dock’ to open the right location).
- Now run: `metalsmith` and the project will ‘build’ itself into the `/build` directory.

##Add a new project to your portfolio:
- Add the new project’s video to Vimeo.
- Add image of the project‘s poster frame to `/images/<imagename>`.
- Duplicate any other project file in `/src/projects/` and give it your new projects title as filename (leaving `.md` at the end).
- Enter the appropriate data in the project file you just created (including `VimeoID`, date and `posterImage`).
- The projects description is below the dashed line (`---`) is parsed with Markdown. So it can be either plain text or [Markdown](https://daringfireball.net/projects/markdown/).

##Publish to github pages
- Open the Terminal (is a default application on any Mac).
- In the Terminal, go to the project folder. (On a Mac you can drag the project folder on the Terminal icon in the ‘Dock’ to open the right location).
- In the Terminal, run: `sh deploy.sh`.
- The site is now published to github pages at: `http://margrog.github.io/portfolio/`.

## Custom domain
The project is hosted at GitHub Pages (http://margrog.github.io/portfolio/). If you want it to run on a custom domain, here is how: [Using a custom domain with GitHub Pages](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/)

##Technical References
- [Metalsmith](metalsmith.io)
- [Handlebars](http://handlebarsjs.com/)
- [Markdown](https://daringfireball.net/projects/markdown/)
- [PostCSS](https://github.com/postcss/postcss)

##Support
Add an issue to the GitHub repo mentioning `@timohofmeijer`.
