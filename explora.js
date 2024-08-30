document.addEventListener('DOMContentLoaded', () => {
    const profilesArtistic = [
        { nombre: 'NOMBRES DE ARTISTA 1', id: 'NOMBRE ARTISTICO', fechaNacimiento: '02/19/2007', likes: 0, dislikes: 0, foto: 'artistic1.jpg', youtube: 'https://www.youtube.com/channel/UC1', instagram: 'https://www.instagram.com/santiagoatocha', descripcion: 'Artista multifacético con gran talento en la pintura y la música.' },
        { nombre: 'NOMBRES DE ARTISTA 2', id: 'NOMBRE ARTISTICO', fechaNacimiento: '02/19/2007', likes: 0, dislikes: 0, foto: 'artistic1.jpg', youtube: 'https://www.youtube.com/channel/UC1', instagram: 'https://www.instagram.com/santiagoatocha', descripcion: 'Artista multifacético con gran talento en la pintura y la música.' },
        { nombre: 'NOMBRES DE ARTISTA 3', id: 'NOMBRE ARTISTICO', fechaNacimiento: '02/19/2007', likes: 0, dislikes: 0, foto: 'artistic1.jpg', youtube: 'https://www.youtube.com/channel/UC1', instagram: 'https://www.instagram.com/santiagoatocha', descripcion: 'Artista multifacético con gran talento en la pintura y la música.' },
        { nombre: 'NOMBRES DE ARTISTA 4', id: 'NOMBRE ARTISTICO', fechaNacimiento: '02/19/2007', likes: 0, dislikes: 0, foto: 'artistic1.jpg', youtube: 'https://www.youtube.com/channel/UC1', instagram: 'https://www.instagram.com/santiagoatocha', descripcion: 'Artista multifacético con gran talento en la pintura y la música.' },
        { nombre: 'NOMBRES DE ARTISTA 5', id: 'NOMBRE ARTISTICO', fechaNacimiento: '02/19/2007', likes: 0, dislikes: 0, foto: 'artistic1.jpg', youtube: 'https://www.youtube.com/channel/UC1', instagram: 'https://www.instagram.com/santiagoatocha', descripcion: 'Artista multifacético con gran talento en la pintura y la música.' },
        { nombre: 'NOMBRES DE ARTISTA 6', id: 'NOMBRE ARTISTICO', fechaNacimiento: '02/19/2007', likes: 0, dislikes: 0, foto: 'artistic1.jpg', youtube: 'https://www.youtube.com/channel/UC1', instagram: 'https://www.instagram.com/santiagoatocha', descripcion: 'Artista multifacético con gran talento en la pintura y la música.' },
        { nombre: 'NOMBRES DE ARTISTA 7', id: 'NOMBRE ARTISTICO', fechaNacimiento: '02/19/2007', likes: 0, dislikes: 0, foto: 'artistic1.jpg', youtube: 'https://www.youtube.com/channel/UC1', instagram: 'https://www.instagram.com/santiagoatocha', descripcion: 'Artista multifacético con gran talento en la pintura y la música.' },
        { nombre: 'NOMBRES DE ARTISTA 8', id: 'NOMBRE ARTISTICO', fechaNacimiento: '02/19/2007', likes: 0, dislikes: 0, foto: 'artistic1.jpg', youtube: 'https://www.youtube.com/channel/UC1', instagram: 'https://www.instagram.com/santiagoatocha', descripcion: 'Artista multifacético con gran talento en la pintura y la música.' },
        { nombre: 'NOMBRES DE ARTISTA 9', id: 'NOMBRE ARTISTICO', fechaNacimiento: '02/19/2007', likes: 0, dislikes: 0, foto: 'artistic1.jpg', youtube: 'https://www.youtube.com/channel/UC1', instagram: 'https://www.instagram.com/santiagoatocha', descripcion: 'Artista multifacético con gran talento en la pintura y la música.' },     
        // Otros perfiles artísticos...
    ];

    const profilesSports = [
        { nombre: 'NOMBRE DE DEPORTISTA 1', id: 'APODO DE DEPORTISTA', fechaNacimiento: '04/08/2005', likes: 0, dislikes: 0, foto: 'sports1.jpg', youtube: 'https://www.youtube.com/channel/UC3', instagram: 'https://www.instagram.com/deportista1', descripcion: 'Atleta profesional destacado en competencias internacionales.' },
        { nombre: 'NOMBRE DE DEPORTISTA 2', id: 'APODO DE DEPORTISTA', fechaNacimiento: '04/08/2005', likes: 0, dislikes: 0, foto: 'sports1.jpg', youtube: 'https://www.youtube.com/channel/UC3', instagram: 'https://www.instagram.com/deportista1', descripcion: 'Atleta profesional destacado en competencias internacionales.' },
        { nombre: 'NOMBRE DE DEPORTISTA 3', id: 'APODO DE DEPORTISTA', fechaNacimiento: '04/08/2005', likes: 0, dislikes: 0, foto: 'sports1.jpg', youtube: 'https://www.youtube.com/channel/UC3', instagram: 'https://www.instagram.com/deportista1', descripcion: 'Atleta profesional destacado en competencias internacionales.' },
        { nombre: 'NOMBRE DE DEPORTISTA 4', id: 'APODO DE DEPORTISTA', fechaNacimiento: '04/08/2005', likes: 0, dislikes: 0, foto: 'sports1.jpg', youtube: 'https://www.youtube.com/channel/UC3', instagram: 'https://www.instagram.com/deportista1', descripcion: 'Atleta profesional destacado en competencias internacionales.' },
        { nombre: 'NOMBRE DE DEPORTISTA 5', id: 'APODO DE DEPORTISTA', fechaNacimiento: '04/08/2005', likes: 0, dislikes: 0, foto: 'sports1.jpg', youtube: 'https://www.youtube.com/channel/UC3', instagram: 'https://www.instagram.com/deportista1', descripcion: 'Atleta profesional destacado en competencias internacionales.' },
        { nombre: 'NOMBRE DE DEPORTISTA 6', id: 'APODO DE DEPORTISTA', fechaNacimiento: '04/08/2005', likes: 0, dislikes: 0, foto: 'sports1.jpg', youtube: 'https://www.youtube.com/channel/UC3', instagram: 'https://www.instagram.com/deportista1', descripcion: 'Atleta profesional destacado en competencias internacionales.' },
        { nombre: 'NOMBRE DE DEPORTISTA 7', id: 'APODO DE DEPORTISTA', fechaNacimiento: '04/08/2005', likes: 0, dislikes: 0, foto: 'sports1.jpg', youtube: 'https://www.youtube.com/channel/UC3', instagram: 'https://www.instagram.com/deportista1', descripcion: 'Atleta profesional destacado en competencias internacionales.' },
        { nombre: 'NOMBRE DE DEPORTISTA 8', id: 'APODO DE DEPORTISTA', fechaNacimiento: '04/08/2005', likes: 0, dislikes: 0, foto: 'sports1.jpg', youtube: 'https://www.youtube.com/channel/UC3', instagram: 'https://www.instagram.com/deportista1', descripcion: 'Atleta profesional destacado en competencias internacionales.' },
        { nombre: 'NOMBRE DE DEPORTISTA 9', id: 'APODO DE DEPORTISTA', fechaNacimiento: '04/08/2005', likes: 0, dislikes: 0, foto: 'sports1.jpg', youtube: 'https://www.youtube.com/channel/UC3', instagram: 'https://www.instagram.com/deportista1', descripcion: 'Atleta profesional destacado en competencias internacionales.' },
        // Otros perfiles deportivos...
    ];

    const profilesProjects = [
        { nombre: 'NOMBRE DE PROYECTO 1', pdfUrl: 'pdf proyectos/cuestionario primero.pdf', likes: 0, dislikes: 0, foto: 'projects1.jpg', youtube: 'https://www.youtube.com/channel/UC3' },
        { nombre: 'NOMBRE DE PROYECTO 2', pdfUrl: 'path/to/your/pdf1.pdf', likes: 0, dislikes: 0, foto: 'projects1.jpg' },
        { nombre: 'NOMBRE DE PROYECTO 3', pdfUrl: 'path/to/your/pdf1.pdf', likes: 0, dislikes: 0, foto: 'projects1.jpg' },
        { nombre: 'NOMBRE DE PROYECTO 4', pdfUrl: 'path/to/your/pdf1.pdf', likes: 0, dislikes: 0, foto: 'projects1.jpg' },
        { nombre: 'NOMBRE DE PROYECTO 5', pdfUrl: 'path/to/your/pdf1.pdf', likes: 0, dislikes: 0, foto: 'projects1.jpg' },
        { nombre: 'NOMBRE DE PROYECTO 6', pdfUrl: 'path/to/your/pdf1.pdf', likes: 0, dislikes: 0, foto: 'projects1.jpg' },
        { nombre: 'NOMBRE DE PROYECTO 7', pdfUrl: 'path/to/your/pdf1.pdf', likes: 0, dislikes: 0, foto: 'projects1.jpg' },
        { nombre: 'NOMBRE DE PROYECTO 8', pdfUrl: 'path/to/your/pdf1.pdf', likes: 0, dislikes: 0, foto: 'projects1.jpg' },
        { nombre: 'NOMBRE DE PROYECTO 9', pdfUrl: 'path/to/your/pdf1.pdf', likes: 0, dislikes: 0, foto: 'projects1.jpg' },
        // Otros perfiles de proyectos...
    ];

    // Inicializar las listas de perfiles
    initProfileList(profilesArtistic, 'profileListArtistic', 'artistDetailsArtistic', displayArtistDetails);
    initProfileList(profilesSports, 'profileListSports', 'artistDetailsSports', displaySportsDetails);
    initProfileList(profilesProjects, 'profileListProjects', 'artistDetailsProjects', displayProjectDetails);

// Funciones de artistica...
    function initProfileList(profiles, listId, detailsId, displayFunction) {
        const profileList = document.getElementById(listId);
        const artistDetails = document.getElementById(detailsId);

        profiles.forEach((profile, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="profile-icon" style="background-image: url('${profile.foto}');"></div>
                <div>
                    <strong>${profile.nombre}</strong>
                </div>
            `;
            li.addEventListener('click', () => {
                document.querySelectorAll(`#${listId} li`).forEach(item => item.classList.remove('active'));
                li.classList.add('active');
                displayFunction(profile, artistDetails, index);
            });
            profileList.appendChild(li);
        });
    }
    function displayArtistDetails(profile, artistDetails, index) {
        artistDetails.innerHTML = `
            <h2 class="artist-details">${profile.nombre}</h2>
            <p class="artist-details">ID: ${profile.id}</p>
            <p class="artist-details">Fecha de Nacimiento: ${profile.fechaNacimiento}</p>
            <p class="artist-details">${profile.descripcion}</p>
            <p><a href="${profile.youtube}" target="_blank">Ver en YouTube</a></p>
            <p><a href="${profile.instagram}" target="_blank">Ver en Instagram</a></p>
            <div class="like-section">
                <button id="likeButtonArtistic-${index}"><i class="fas fa-thumbs-up"></i> (${profile.likes})</button>
            </div>
            <div class="dislike-section">
                <button id="dislikeButtonArtistic-${index}"><i class="fas fa-thumbs-down"></i> (${profile.dislikes})</button>
            </div>
        `;

        document.getElementById(`likeButtonArtistic-${index}`).addEventListener('click', () => {
            profile.likes++;
            updateLikeDislikeButtons(profile, artistDetails, index, 'Artistic');
        });

        document.getElementById(`dislikeButtonArtistic-${index}`).addEventListener('click', () => {
            profile.dislikes++;
            updateLikeDislikeButtons(profile, artistDetails, index, 'Artistic');
        });
    }




// Funciones de deporte...
    function displaySportsDetails(profile, artistDetails, index) {
        artistDetails.innerHTML = `
            <h2 class="artist-details">${profile.nombre}</h2>
            <p class="artist-details">ID: ${profile.id}</p>
            <p class="artist-details">Fecha de Nacimiento: ${profile.fechaNacimiento}</p>
            <p class="artist-details">${profile.descripcion}</p>
            <p><a href="${profile.youtube}" target="_blank">Ver en YouTube</a></p>
            <p><a href="${profile.instagram}" target="_blank">Ver en Instagram</a></p>
            <div class="like-section">
                <button id="likeButtonSports-${index}"><i class="fas fa-thumbs-up"></i> (${profile.likes})</button>
            </div>
            <div class="dislike-section">
                <button id="dislikeButtonSports-${index}"><i class="fas fa-thumbs-down"></i> (${profile.dislikes})</button>
            </div>
        `;

        document.getElementById(`likeButtonSports-${index}`).addEventListener('click', () => {
            profile.likes++;
            updateLikeDislikeButtons(profile, artistDetails, index, 'Sports');
        });

        document.getElementById(`dislikeButtonSports-${index}`).addEventListener('click', () => {
            profile.dislikes++;
            updateLikeDislikeButtons(profile, artistDetails, index, 'Sports');
        });
    }



    // Funciones de proyectos...
    function displayProjectDetails(profile, artistDetails, index) {
        artistDetails.innerHTML = `
            <h2 class="artist-details">${profile.nombre}</h2>
            <div class="pdf-viewer">
                <iframe src="${profile.pdfUrl}" width="100%" height="500px"></iframe>
            </div>
            <div class="like-section">
                <button id="likeButtonProject-${index}"><i class="fas fa-thumbs-up"></i> (${profile.likes})</button>
            </div>
            <div class="dislike-section">
                <button id="dislikeButtonProject-${index}"><i class="fas fa-thumbs-down"></i> (${profile.dislikes})</button>
            </div>
             <p><a href="${profile.youtube}" target="_blank">Ver en YouTube</a></p
        `;

        document.getElementById(`likeButtonProject-${index}`).addEventListener('click', () => {
            profile.likes++;
            updateLikeDislikeButtons(profile, artistDetails, index, 'Project');
        });

        document.getElementById(`dislikeButtonProject-${index}`).addEventListener('click', () => {
            profile.dislikes++;
            updateLikeDislikeButtons(profile, artistDetails, index, 'Project');
        });
    }

    function updateLikeDislikeButtons(profile, artistDetails, index, section) {
        artistDetails.querySelector(`#likeButton${section}-${index}`).innerHTML = `<i class="fas fa-thumbs-up"></i> (${profile.likes})`;
        artistDetails.querySelector(`#dislikeButton${section}-${index}`).innerHTML = `<i class="fas fa-thumbs-down"></i> (${profile.dislikes})`;
    }

    const headerItems = document.querySelectorAll('nav ul li');
    const sections = {
        'ARTÍSTICA': { sidebar: 'artisticSection', details: 'artistDetailsArtistic' },
        'DEPORTE': { sidebar: 'sportsSection', details: 'artistDetailsSports' },
        'PROYECTOS': { sidebar: 'projectsSection', details: 'artistDetailsProjects' }
    };

    headerItems.forEach(item => {
        item.addEventListener('click', () => {
            headerItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');

            for (const section in sections) {
                document.getElementById(sections[section].sidebar).style.display = 'none';
                document.getElementById(sections[section].details).style.display = 'none';
            }

            const selectedSection = sections[item.textContent.toUpperCase()];
            document.getElementById(selectedSection.sidebar).style.display = 'block';
            document.getElementById(selectedSection.details).style.display = 'block';
        });
    });

    // Inicializar mostrando la sección artística
    document.querySelector('#artisticNav').click();
});
