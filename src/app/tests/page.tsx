const getTests = async () => {
  const rest = await fetch(`${process.env.API_URL}/tests/1`);

  if (!rest.ok) {
    throw new Error("Failed to fetch data");
  }

  return rest.json();
};

export default async function Page() {
  const data = await getTests();

  return <main>{data.name}</main>;
}
