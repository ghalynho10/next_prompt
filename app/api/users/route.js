export async function GET(req, res) {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jack" },
  ];

  //   send the users as a response
  return new Response(JSON.stringify(users));
}
