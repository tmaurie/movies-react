import React, { useContext } from "react";
import { LanguageContext } from "App/src/presentation/context/LanguageContext";
import dictionary from "App/src/languages/dictionary";

const MovieCredits = ({credits}) => {
  const { language } = useContext(LanguageContext);
  const translations = dictionary[language];

  return (<div className="movie-credits content-card">
    <h3>{translations.directed_by}</h3>
    <div className="crew">
      {credits.crew.filter((crew) => crew.job === "Director").map((director) => (
        <div className="director" key={director.id}>
          <span>{director.name}</span>
        </div>))}

    </div>
    <h3>{translations.cast}</h3>
    <div className="cast">
      {credits.cast.slice(0, 8).map((actor) => (<div className="actor" key={actor.id}>
        <span>{actor.name}</span> <span> {translations.as} {actor.character}</span>
      </div>))}
    </div>


  </div>);
};

export default MovieCredits;
