import { request } from 'graphql-request';
import useSWR from 'swr';
import Layout from '../components/Layout';
import Date from '../components/Date';

const API = 'https://api.graph.cool/simple/v1/movies';

export default function Movies() {
  const { data, error } = useSWR(
    `{
    Movie(title: "Inception") {
      title
      releaseDate
      actors {
        id
        name
      }
    }
  }`,
    (query) => request(API, query)
  );

  if (error) return <div>failed, sorry</div>;
  if (!data) return <div>loading...</div>;

  const { title, releaseDate, actors } = data.Movie;

  return (
    <Layout>
      <h2>{title}</h2>
      <div className="text-sm">
        <Date dateString={releaseDate} />
      </div>
      <div className="py-2">
        <h4 className="text-xl">Actors:</h4>
        <ul className="list-none">
          {actors.map((actor) => (
            <li className="pb-2" key={actor.id}>
              {actor.name}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
