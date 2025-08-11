import { List } from "../../components/List";
import { Card } from "../../components/Card";
import { useCountries } from "./useCountries";

const CountryList = () => {
  const [countries, { error, status }] = useCountries();

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}

      {status === "received" && (
        <List>
          {countries.map((c) => {
            const info = {
              image: c.image.tablet,
              name: c.name,
              price: c.price,
              category: c.category,
              id: c.id,
              info: [
                // {
                //   title: "category",
                //   description: c.category,
                // },
                {
                  title: "Price",
                  description: c.price,
                },
              ],
            };

            return <Card key={c.id} {...info} />;
          })}
        </List>
      )}
    </>
  );
};

export { CountryList };
