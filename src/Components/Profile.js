// eslint-disable-next-line no-unused-vars
import { onNavigate } from '../router';
import { signOutUser } from '../lib/Autenticacion';

export const Profile = () => {
  const containerProfile = document.createElement('div');
  containerProfile.className = 'containerProfile';

  const profilePicture = document.createElement('img');
  profilePicture.src = '../imagenes/iconoperfil.png';
  profilePicture.className = 'profilePicture';

  const imgFavorite = document.createElement('img');
  imgFavorite.className = 'imgFavorite';
  imgFavorite.src = '../imagenes/favorite.png';
  const buttonFavorite = document.createElement('button');
  buttonFavorite.className = 'buttonFavorite';
  const strongFavorite = document.createElement('strong');
  strongFavorite.textContent = 'My Favorites';
  strongFavorite.className = 'favorite';

  const imgSave = document.createElement('img');
  imgSave.className = 'imgSave';
  imgSave.src = '../imagenes/guardar.png';
  const buttonSave = document.createElement('button');
  buttonSave.className = 'buttonSave';
  const strongSave = document.createElement('strong');
  strongSave.textContent = 'Saved';
  strongSave.className = 'savedProfile';

  const imgMap = document.createElement('img');
  imgMap.className = 'imgMap';
  imgMap.src = '../imagenes/mapa.png';
  const buttonMap = document.createElement('button');
  buttonMap.className = 'buttonMap';
  const strongMap = document.createElement('strong');
  strongMap.textContent = 'Map';
  strongMap.className = 'map';

  containerProfile.appendChild(profilePicture);
  containerProfile.appendChild(buttonFavorite);
  buttonFavorite.append(imgFavorite, strongFavorite);
  containerProfile.appendChild(buttonSave);
  buttonSave.append(imgSave, strongSave);
  containerProfile.appendChild(buttonMap);
  buttonMap.append(imgMap, strongMap);

  const menuIconoProfile = document.createElement('section');
  menuIconoProfile.className = 'menuIconoProfile';
  const homeIconoProfile = document.createElement('img');
  homeIconoProfile.className = 'homeIconoProfile';
  homeIconoProfile.src = '../imagenes/casa-silueta-negra-sin-puerta.png';
  const signOutProfile = document.createElement('img'); // icono puerta
  signOutProfile.className = 'signOutProfile';
  signOutProfile.src = '../imagenes/cerrar-sesion.png';

  containerProfile.appendChild(menuIconoProfile);
  menuIconoProfile.append(homeIconoProfile, signOutProfile);

  homeIconoProfile.addEventListener('click', () => {
    onNavigate('/feed');
  });

  // Botón de cerrar sesión
  signOutProfile.addEventListener('click', () => {
    signOutUser()
      .then(() => {
        // eslint-disable-next-line no-undef
        console.log(signOutUser(auth));
        onNavigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        return errorCode;
      });
  });
  return containerProfile;
};
