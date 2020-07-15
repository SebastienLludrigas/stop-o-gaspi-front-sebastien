import React from 'react';
import { useSpring, animated as a } from 'react-spring';

// == Import

import Laurie from 'src/assets/image/Blanche-neige.jpg';
import sebastien from 'src/assets/image/Prof.png';
import aurelien from 'src/assets/image/Timide.png';
import alexis from 'src/assets/image/Dormeur.png';
import greg from 'src/assets/image/Grincheux.png';
import './about.scss';
// == Composant
const About = () => {
const effectAbout = useSpring({ marginTop: 0, from: { marginTop: 500 } });

  return (
    <div className="about_page">
      <a.div
        className="about_title"
        style={effectAbout}
        config={{ delay: 1, duration: 5000 }}
      >
        <h2>
          L'équipe de Stop O' Gaspi :
        </h2>
      </a.div>
      <img className="photo_laurie" alt="laurie" src={Laurie} />
      <ul className="about_laurie ul_about">
        <li>LAURIE</li>
        <li>Product Owner</li>
        <li>Dev Back</li>

      </ul>
      <img className="photo_sebastien" alt="sebastien" src={sebastien} />
      <ul className="about_sebastien ul_about">
        <li>SEBASTIEN</li>
        <li>Lead Front</li>
        <li>Dev Front</li>

      </ul>
      <img className="photo_aurelien" alt="aurelien" src={aurelien} />
      <ul className="about_aurelien ul_about">
        <li>AURELIEN</li>
        <li>Lead Back</li>
        <li>Dev Back</li>

      </ul>
      <img className="photo_greg" alt="greg" src={greg} />
      <ul className="about_greg ul_about">
        <li>GREG</li>
        <li>Git Master</li>
        <li>Dev Front</li>

      </ul>
      <img className="photo_alexis" alt="alexis" src={alexis} />
      <ul className="about_alexis ul_about">
        <li>ALEXIS</li>
        <li>Scrum Master</li>
        <li>Dev Front</li>

      </ul>

      <h2 className="tous">tous issue d'une formation FULLSTACK</h2>
    </div>
  );
};
// == Export
export default About;
