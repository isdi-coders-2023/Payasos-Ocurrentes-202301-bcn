import { rest } from "msw";

export const handlers = [
  rest.get("https://rickandmortyapi.com/api/character", (req, rest, ctx) => {
    return rest(
      ctx.status(200),
      ctx.json({
        info: {
          count: 1,
          next: "",
          pages: 1,
          prev: null,
        },
        results: [
          {
            id: 1,
            name: "Rick",
            status: "",
            species: "",
            gender: "",
            origin: { name: "" },
            location: { name: "" },
            image: "",
          },
          {
            id: 2,
            name: "Morty",
            status: "",
            species: "",
            gender: "",
            origin: { name: "" },
            location: { name: "" },
            image: "",
          },
        ],
      })
    );
  }),
];

export const errorHandlers = [
  rest.get("https://rickandmortyapi.com/api/character", (req, rest, ctx) => {
    return rest(ctx.status(500), ctx.json(null));
  }),
];
