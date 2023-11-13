import shuffle from 'lodash/shuffle';
import { db } from '../../orm/db';
import { deal } from '../../orm/schema';

export default async function Home() {
  const orderedDeals = await db.select().from(deal);
  const deals = shuffle(orderedDeals);

  return (
    <div className="flex flex-col flex-grow justify-center max-w-screen-xl mx-auto px-2 xl:px-0 w-full">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {deals.map((d) => (
          <a
            className="px-4 py-8 rounded-lg shadow-lg"
            key={d.id}
            href={d.url}
            rel="noreferrer"
            target="_blank"
          >
            <p className="text-lg">{d.name}</p>
            <p className="whitespace-pre-wrap text-sm">{d.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
