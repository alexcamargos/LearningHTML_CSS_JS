// -------------------------------------------------------------------------------------------------
// Name: app.js
// Version: 0.0.1
//
// Summary: Learning HTML, CSS (Sass) and JavaScript
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

// Create a custom elemento for show projects in page.
class ProjectCard extends HTMLElement {
    // A custom ProjectCard element.
    constructor() {
        super();

        // Create a shadow root.
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Set the styles for the component.
        shadowRoot.appendChild(this.styleSheet());
        // Build the component.
        shadowRoot.appendChild(this.build());
    }

    __createProjectTitle() {
        // Create the title for the project.
        let div = document.createElement('div');
        div.classList.add('project-title');

        let h4 = document.createElement('h4');
        h4.textContent = this.getAttribute('title');

        let projectTags = document.createElement('div');
        projectTags.classList.add('project-tags');

        let ul = document.createElement('ul');

        let tags = this.getAttribute('tags').split(',');
        tags.forEach((tag) => {
            let li = document.createElement('li');
            li.textContent = tag;
            ul.appendChild(li);
        });

        projectTags.appendChild(ul);

        div.appendChild(h4);
        div.appendChild(projectTags);

        return div;
    }

    __createProjectLinks() {
        // Create the links for the project.
        let div = document.createElement('div');
        div.classList.add('project-links');

        let projectLinksItens = document.createElement('div');
        projectLinksItens.classList.add('project-links-itens');

        let projectLinkRepository = document.createElement('div');
        projectLinkRepository.classList.add('project-link');

        let pictureRepository = document.createElement('picture');
        let projectImage = document.createElement('img');
        projectImage.src = 'assets/img/code.svg';
        pictureRepository.appendChild(projectImage);

        let linkRepository = document.createElement('a');
        linkRepository.href = this.getAttribute('repository');
        linkRepository.target = '_blank';
        linkRepository.textContent = 'Ver Repositório';

        projectLinkRepository.appendChild(pictureRepository);
        projectLinkRepository.appendChild(linkRepository);

        let projectLinkProject = document.createElement('div');
        projectLinkProject.classList.add('project-link');

        let pictureProject = document.createElement('picture');
        let imageProject = document.createElement('img');
        imageProject.src = 'assets/img/web.svg';
        pictureProject.appendChild(imageProject);

        let linkProject = document.createElement('a');
        linkProject.href = this.getAttribute('project');
        linkProject.target = '_blank';
        linkProject.textContent = 'Ver Projeto';

        projectLinkProject.appendChild(pictureProject);
        projectLinkProject.appendChild(linkProject);

        projectLinksItens.appendChild(projectLinkRepository);
        projectLinksItens.appendChild(projectLinkProject);

        div.appendChild(projectLinksItens);

        return div;
    }

    __createProjectDescription() {
        // Create the description for the project.
        let div = document.createElement('div');
        div.classList.add('project-description');

        let p = document.createElement('p');
        p.textContent = this.getAttribute('description');

        div.appendChild(p);

        return div;
    }

    __createProjectImage() {
        // Create the image for the project.
        let picture = document.createElement('picture');
        let projectImage = document.createElement('img');
        projectImage.src = this.getAttribute('image');
        picture.appendChild(projectImage);

        return picture;
    }

    build() {
        // Create the shadow DOM for the component.
        let article = document.createElement('article');
        article.classList.add('project');

        let projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

        let projectWrapper = document.createElement('div');
        projectWrapper.classList.add('project-wrapper');

        let projectTitle = this.__createProjectTitle();
        projectWrapper.appendChild(projectTitle);

        let projectLinks = this.__createProjectLinks();
        projectWrapper.appendChild(projectLinks);

        let projectDescription = this.__createProjectDescription();
        projectWrapper.appendChild(projectDescription);

        let projectImage = this.__createProjectImage();

        projectItem.appendChild(projectWrapper);
        projectItem.appendChild(projectImage);
        article.appendChild(projectItem);

        return article;
    }

    styleSheet() {
        // Set the styles for the component.
        let style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', '/assets/css/project-card.css');

        return style;
    }
}

customElements.define('project-card', ProjectCard);
