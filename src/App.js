import { getImageUrl } from "./utils.js";

function profile({ name, imageUrl, Profession, n_awards, awards, Discovered }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl({ imageUrl })}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {Profession}
        </li>
        <li>
          <b>Awards: {n_awards} </b>({awards})
        </li>
        <li>
          <b>Discovered: </b>
          {Discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Gallery
        name="Maria Skłodowska-Curie"
        imageUrl="szV5sdG"
        Profession="physicist and chemist"
        n_awards={4}
        awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
       Matteucci Medal"
        Discovered="polonium (chemical element)"
      />
      <Gallery
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        Profession="geochemist"
        n_awards={2}
        awards="Miyake Prize for geochemistry, Tanaka Prize"
        Discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}

{
  /* <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl("szV5sdG")}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section> */
}
{
  /* <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl("YfeOqp2")}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section> */
}
